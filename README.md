MSP Course & Lab Selector / Planner

This repository contains a web-based MSP course and lab planner that lets students select courses and automatically see compatible labs (that do not overlap in day/time). 
It is a lightweight, interactive version of the original Excel course/lab selector and has evolved into a more advanced single-page academic planning tool.

🧩 Features
Select Courses & Labs: Choose one or two courses and automatically see compatible labs in real-time.
Interactive Course Catalogue: Search and filter through the full MSP course offering using specialized “Filter Chips” (e.g., by Period, Discipline, or Level).
Academic Planning: Drag-and-drop or select courses to build a multi-year academic plan.
Transcript Integration: Upload official transcripts (PDF) to automatically mark completed courses using pdf.js.
Data Visualization: Visualize curriculum balance across different scientific disciplines.
Persistent Storage: Save your plan locally in the browser to continue later without losing progress.
Offline-first: Fully functional offline once the page and assets are loaded.

📂 Repository Structure
msp-course-lab-selector/
│
├── dist/               ← Stable standalone versions of the app
│   └── planner-v2.html
│
├── files/              ← Supporting files
│   ├── MSP-input/      ← CSVs, PDFs, or frame schedule files
│   │   ├── FrameSchedule_P5_v1.csv
│   │   └── Frame Schedule MSP 2025-2026 Period 5 final (1).pdf
│   └── images/         ← Logos, favicon, etc.
│       ├── MSP Logo.png
│       ├── UM Logo.png
│       ├── favicon.png
│       ├── logo-header.png
│       └── logo-main.png
│
├── old/                ← Older or obsolete versions
│   ├── catalogue.html
│   └── index.html
│
├── src/                ← Current development source files
│   ├── planner-v2.html
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── README.md
│   └── assets/         ← Local copy of images / CSVs for dev
│
├── README.md           ← This guide
└── LICENSE (optional)

⚙️ How to Use
1. Launch the App

Open planner-v2.html (or the dist/planner-v2.html stable version) in any modern web browser (Chrome, Firefox, Safari, Edge). No installation or server setup is required.

2. Exploring Courses
Navigate to the Catalogue section.
Use the search bar or filter chips to find courses in specific disciplines (Biology, Chemistry, Physics, etc.) or levels (1000, 2000, 3000).
3. Creating a Plan
Select courses to add to your planner.
The app automatically prevents scheduling conflicts and organizes courses by period and year.
4. Importing Your Transcript
Use the Transcript Upload section to import official transcripts.
The app scans the PDF and marks completed courses as “Completed.”
Internet is required only the first time to fetch the pdf.js library.
5. Selecting Labs
Compatible labs for the chosen courses are displayed dynamically.
Choose a lab from the dropdown or table to include it in your final selection.
Selected labs appear below the chosen courses.

🌐 Offline Capability
Catalogue & Planner: Works offline since all course data is embedded. *if schedule is updated Internet is required to pull the new data
Transcript Upload: Internet required only once to fetch pdf.js; cached afterwards.

For Developers
version.json priority field has 4 valid options: [low, medium, high, critical]
