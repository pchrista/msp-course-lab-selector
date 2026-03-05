from course import Course, Class, Practical

period_courses_dict = {}
courses_dict = {}
course_blocks = ("green", "blue", "yellow", "orange", "purple")

trial_course1 = Course("Intro to Physics", "PHY1101", "Lorenzo", 5, None, "P1", "green")
trial_course1.add_lecture(Class("Mon", 10, 0, 11, 0, "Room 1"))
trial_course1.add_tutorial(Class("Tue", 10, 0, 11, 0, "Room 2"))

trial_course2 = Course("Intro to Chemistry", "CHE1101", "Chris", 5, None, "P1", "red")
trial_course2.add_lecture(Class("Mon", 10, 0, 11, 0, "Room 1"))
trial_course2.add_tutorial(Class("Tue", 10, 0, 11, 0, "Room 2"))

trial_practical1 = Practical("Intro to Scientific Resarch I", "PRA1101", "Pawly", ["Mon","Tue"], 10, 0, 11, 0, "Room 3")
trial_practical2 = Practical("Intro to Scientific Resarch II", "PRA1102", "Pawly", ["Tue","Thu"], 10, 0, 11, 0, "Room 3")

period_courses_dict["PHY1101"] = trial_course1
period_courses_dict["CHE1101"] = trial_course2
period_courses_dict["PRA1101"] = trial_practical1
period_courses_dict["PRA1102"] = trial_practical2

def cmd_add_class():
    day = input("Enter day: ")
    s_raw = input("Enter start time (hour minute): ").strip()
    s_hour, s_minute = s_raw.split()
    s_hour = int(s_hour)
    s_minute = int(s_minute)

    e_raw = input("Enter end time (hour minute): ").strip()
    e_hour, e_minute = e_raw.split()
    e_hour = int(e_hour)
    e_minute = int(e_minute)

    loc = input("Enter location: ").strip()

    return Class(s_day, s_hour, s_minute, e_day, e_hour, e_minute, loc)

def cmd_add_course():
    name = input("Enter course name: ")
    code = input("Enter course code: ")
    professor = input("Enter course professor: ")
    crdts = input("Enter course credits: ")
    prereqequsites = []
    print("Enter course prereqequsites code: ")
    while True:
        prereq = input("- ").strip()
        if prereq == "":
            break
        else:
            prereqequsites.append(prereq)
    print("No prerequs!")
    
    course = Course(name, code, professor, crdts, prereqequsites)

    num_lectures = int(input("Enter number of lectures: "))
    for i in range(num_lectures):
        lecture = cmd_add_class()
        lecture.set_type("Lecture")
        course.add_lecture(lecture)

    num_tutorials = int(input("Enter number of tutorials: "))
    for i in range(num_tutorials):
        tutorial = cmd_add_class()
        tutorial.set_type("Tutorial")
        course.add_tutorial(tutorial)

    courses_dict[code] = course

def cmd_display_courses():
    print("Courses:")
    for course in courses_dict:
        print(course)

def cmd_display_course():
    code = input("Enter course code: ")
    print("")
    if code in courses_dict:
        course = courses_dict[code]
        print(f"{course.name} ({course.code})")
        print(f" Professor: {course.professor}")
        print(f" Credits: {course.credits}")
        print(f" Prereqequsites: {course.prerqequsites}")
        print(" Lectures:")
        for lecture in course.lectures:
            print(f"  - {lecture.day} {lecture.hour}:{lecture.minute} - {lecture.location}")
        print(" Tutorials:")
        for tutorial in course.tutorials:
            print(f"  - {tutorial.day} {tutorial.hour}:{tutorial.minute} - {tutorial.location}")
    else:
        print("Course not found")

def cmd_schedule_collision():
    items = list(period_courses_dict.values())
    practicals = [item for item in items if item.type_ == "practical"]
    collisions_found = False

    def label(x) -> str:
        kind = "Course" if x.type_ == "course" else "Practical"
        code = getattr(x, "code", "N/A")
        return f"{kind} {x.name} ({code})"

    def normalize_day(day: str) -> str:
        return str(day).strip().lower()

    def to_minutes(hour: int, minute: int) -> int:
        return (hour * 60) + minute

    def format_time(minutes: int) -> str:
        return f"{minutes // 60:02d}:{minutes % 60:02d}"

    def overlap(a_start: int, a_end: int, b_start: int, b_end: int) -> bool:
        return a_start < b_end and b_start < a_end

    def block_value(x):
        block = getattr(x, "block", None)
        if block is None:
            return None
        block = str(block).strip()
        return block if block != "" else None

    def build_slot(day, start_hour, start_minute, end_hour, end_minute, kind):
        if None in (day, start_hour, start_minute, end_hour, end_minute):
            return None
        return {
            "day": normalize_day(day),
            "start": to_minutes(start_hour, start_minute),
            "end": to_minutes(end_hour, end_minute),
            "kind": kind,
        }

    def iter_time_slots(x):
        if x.type_ == "course":
            for lecture in getattr(x, "lectures", []):
                slot = build_slot(
                    lecture.day,
                    lecture.hour,
                    lecture.minute,
                    lecture.end_hour,
                    lecture.end_minute,
                    "Lecture",
                )
                if slot:
                    yield slot
            for tutorial in getattr(x, "tutorials", []):
                slot = build_slot(
                    tutorial.day,
                    tutorial.hour,
                    tutorial.minute,
                    tutorial.end_hour,
                    tutorial.end_minute,
                    "Tutorial",
                )
                if slot:
                    yield slot
        elif x.type_ == "practical":
            for day in getattr(x, "days", []) or []:
                slot = build_slot(
                    day,
                    x.s_hour,
                    x.s_minute,
                    x.e_hour,
                    x.e_minute,
                    "Practical",
                )
                if slot:
                    yield slot

    slots_by_item = {item: list(iter_time_slots(item)) for item in items}
    block_by_item = {item: block_value(item) for item in items}

    def practical_fully_colliding(p) -> bool:
        days_raw = getattr(p, "days", []) or []
        days = [normalize_day(day) for day in days_raw]
        if not days:
            return False

        p_block = block_by_item[p]
        if p_block:
            for other in items:
                if other is p:
                    continue
                if block_by_item[other] == p_block:
                    return True

        p_slots_by_day = {}
        for slot in slots_by_item.get(p, []):
            p_slots_by_day.setdefault(slot["day"], []).append(slot)

        for day in days:
            day_slots = p_slots_by_day.get(day, [])
            if not day_slots:
                return False

            day_has_collision = False
            for other in items:
                if other is p:
                    continue
                if p_block and block_by_item[other]:
                    continue

                for p_slot in day_slots:
                    for o_slot in slots_by_item.get(other, []):
                        if o_slot["day"] != day:
                            continue
                        if overlap(p_slot["start"], p_slot["end"], o_slot["start"], o_slot["end"]):
                            day_has_collision = True
                            break
                    if day_has_collision:
                        break
                if day_has_collision:
                    break

            if not day_has_collision:
                return False

        return True

    practical_full_collision = {p: practical_fully_colliding(p) for p in practicals}

    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            a = items[i]
            b = items[j]

            if a.type_ == "practical" and not practical_full_collision.get(a, False):
                continue
            if b.type_ == "practical" and not practical_full_collision.get(b, False):
                continue

            a_block = block_by_item[a]
            b_block = block_by_item[b]

            if a_block and b_block:
                if a_block == b_block:
                    print(
                        f"Collision! Block: {label(a)} and {label(b)} in block '{a_block}'."
                    )
                    collisions_found = True
                continue

            a_slots = slots_by_item.get(a, [])
            b_slots = slots_by_item.get(b, [])

            if not a_slots or not b_slots:
                continue

            for a_slot in a_slots:
                for b_slot in b_slots:
                    if a_slot["day"] != b_slot["day"]:
                        continue
                    if overlap(a_slot["start"], a_slot["end"], b_slot["start"], b_slot["end"]):
                        print(
                            f"Collision! Time: {label(a)} ({a_slot['kind']} "
                            f"{format_time(a_slot['start'])}-{format_time(a_slot['end'])}) and "
                            f"{label(b)} ({b_slot['kind']} "
                            f"{format_time(b_slot['start'])}-{format_time(b_slot['end'])}) "
                            f"on {a_slot['day']}."
                        )
                        collisions_found = True

    if not collisions_found:
        print("No collisions.")





COMMANDS = {"add course": cmd_add_course, 
            "display courses": cmd_display_courses, 
            "display course": cmd_display_course, 
            "schedule collision": cmd_schedule_collision}

while True:
    cmd = input("> ").strip()

    if cmd in COMMANDS:
        COMMANDS[cmd]()
    elif cmd == "exit":
        break
    else:
        print("Unknown command")