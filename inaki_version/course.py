class Course:
    def __init__(self, name, code, professor, crdts=5, period=None, prerequisites=None, block=None):
        self.type_ = "course"
        self.name = name
        self.code = code
        self.professor = professor
        self.credits = float(crdts)
        self.grade = None
        self.prerequisites = prerequisites
        self.lectures = []
        self.tutorials = []
        self.block = block
        self.period = period
        self.days = []
    
    def add_lecture(self, lecture):
        self.lectures.append(lecture)
        self.days.append(lecture.day)
    
    def add_tutorial(self, tutorial):
        self.tutorials.append(tutorial)
        self.days.append(tutorial.day)
        

class Class:
    def __init__(self, day, s_hour, s_minute, e_hour, e_minute, loc):
        self.day = day
        self.hour = s_hour
        self.minute = s_minute
        self.end_hour = e_hour
        self.end_minute = e_minute
        self.location = loc
    
    def set_type(self, type_):
        self.type_ = type_

class Practical:
    def __init__(self, name, code, professor, days, s_hour, s_minute, e_hour, e_minute, loc, crdts=2.5, period=None, prerequisites=None, block=None):
        self.type_ = "practical"
        self.name = name
        self.code = code
        self.professor = professor
        self.credits = float(crdts)
        self.grade = None
        self.prerequisites = prerequisites
        self.days = days
        self.s_hour = s_hour
        self.s_minute = s_minute
        self.e_hour = e_hour
        self.e_minute = e_minute
        self.location = loc
        self.block = block
        self.period = period