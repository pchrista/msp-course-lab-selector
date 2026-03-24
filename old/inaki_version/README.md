# Kosmio Course/Lab Selector (`index.html`)

This page is a browser-only tool for:
- loading an MSP CSV schedule,
- selecting up to 2 courses,
- preventing course time collisions,
- showing compatible labs,
- rendering a weekly calendar for selected courses.

## Files
- `index.html`: main app
- `kosmio_logo.png`: top-left logo (opens Selection Tool tab)
- `msp_white.png`: MSP logo in top bar (links to Maastricht Science Programme page)

## Run Locally
1. Open `index.html` in a browser.
2. Go to **Configuration**.
3. Upload your CSV.
4. Click **Load CSV and Populate Tables**.

No backend or build step is required.

## CSV Format
Expected header columns:
- `Slot`
- `Code`
- `Title`
- `Coordinator`
- `Corequisite`
- `Prerequisite`
- `Days`

### Course vs Lab
- Course: `Slot` has a value (`A`..`E`)
- Lab/skills: `Slot` is empty

### Days Field
Supported formats:
1. Compact block format (recommended)
- `MonAM`, `TuePM`, `WedAM`, etc.
- Multiple entries separated by commas, e.g. `"TueAM, WedAM"`

2. Explicit time ranges
- Example: `Mon 8:30-11:45`, `Tue 12:00-17:15`

## Time Block Rules
When compact blocks are used:
- `AM` -> `08:30-11:45`
- `PM` -> `12:00-17:15`
- `LAB` -> `09:00-17:00`

Labs are treated as lab blocks (`09:00-17:00`).

## Selection Logic
- You can select up to 2 courses.
- Two courses that overlap in day/time cannot be selected together.
- Conflicting options are disabled in the opposite dropdown.
- If a conflicting pair is forced, the latest selection is cleared and a warning is shown.

## Output in Selection Tool
After selecting courses:
1. **Selected Courses** table
2. **Selected Courses Calendar**
3. **Compatible Labs** table

## Calendar Behavior
- Week view: `Mon` to `Fri`
- Grid range: `08:00-18:30`
- Label display excludes edge labels (`08:00` and `18:30`) and aligns to time-step lines
- Event blocks show:
  - course code
  - course title

If a `Days` entry cannot be parsed, it appears in a note under the calendar.

## Theme Notes
- Navigation/tab highlight: `#9855b1`
- Selected course rows keep slot background shades and use black text for readability.
