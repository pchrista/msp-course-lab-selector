const P1_COURSES = [
  {
    "version": "1.0",
    "period": "1",
    "validFrom": "2026-2027",
    "courses": [
      {
        "slot": "A",
        "code": "BIO2001",
        "title": "Cell Biology",
        "coordinator": "Aart van Apeldoorn",
        "corequisite": false,
        "prerequisite": false,
        "days": ["MonAM", "TueAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "A",
        "code": "CHE1101",
        "title": "CORE: Introduction to Chemistry",
        "coordinator": "Chris Bahn",
        "corequisite": true,
        "prerequisite": false,
        "days": ["MonAM", "TueAM"],
        "corequisiteOf": "PRA1101",
        "prerequisiteCodes": null
      },
      {
        "slot": "A",
        "code": "CHE2004",
        "title": "Spectroscopy",
        "coordinator": "Annelies van der Bok",
        "corequisite": false,
        "prerequisite": true,
        "days": ["MonAM", "TueAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "CHE2009+CHE2001"
      },
      {
        "slot": "A",
        "code": "INT3014",
        "title": "Conservation Palaeobiology",
        "coordinator": "Frank Wesselingh & Jesse Hennekam",
        "corequisite": false,
        "prerequisite": true,
        "days": ["MonAM", "TueAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "A",
        "code": "PHY2009",
        "title": "Stellar Astronomy",
        "coordinator": "Chad Ellington",
        "corequisite": false,
        "prerequisite": false,
        "days": ["MonAM", "TueAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "B",
        "code": "CHE3010",
        "title": "Inorganic Chemistry",
        "coordinator": "Giuditta Perversi",
        "corequisite": true,
        "prerequisite": true,
        "days": ["MonPM", "TuePM"],
        "corequisiteOf": "PRA3028",
        "prerequisiteCodes": "CHE2010"
      },
      {
        "slot": "B",
        "code": "INT3001",
        "title": "The Philosophy of Technology",
        "coordinator": "Massimiliano Simons",
        "corequisite": false,
        "prerequisite": true,
        "days": ["MonPM", "TuePM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "PRO1002"
      },
      {
        "slot": "B",
        "code": "NEU2003",
        "title": "Neuroethology",
        "coordinator": "Linnea van Griethuijsen",
        "corequisite": false,
        "prerequisite": true,
        "days": ["MonPM", "TuePM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "NEU1001/NEU1002/BIO3004"
      },
      {
        "slot": "B",
        "code": "MAT2007",
        "title": "Introduction to Programming",
        "coordinator": "Panos Christakoglou",
        "corequisite": false,
        "prerequisite": false,
        "days": ["MonPM", "TuePM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "C",
        "code": "BIO2007",
        "title": "Genetics",
        "coordinator": "Leon de Windt",
        "corequisite": true,
        "prerequisite": true,
        "days": ["TueAM", "WedAM"],
        "corequisiteOf": "PRA2014",
        "prerequisiteCodes": "BIO2001"
      },
      {
        "slot": "C",
        "code": "CHE2009",
        "title": "Fundamentals of Organic Chemistry",
        "coordinator": "Hanne Diliën",
        "corequisite": true,
        "prerequisite": false,
        "days": ["TueAM", "WedAM"],
        "corequisiteOf": "PRA2032",
        "prerequisiteCodes": null
      },
      {
        "slot": "C",
        "code": "PHY1101",
        "title": "CORE: Introduction to Physics",
        "coordinator": "Lorenzo Reverberi",
        "corequisite": false,
        "prerequisite": false,
        "days": ["TueAM", "WedAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "C",
        "code": "PHY3001",
        "title": "Quantum Mechanics",
        "coordinator": "Keri Vos",
        "corequisite": true,
        "prerequisite": true,
        "days": ["TueAM", "WedAM"],
        "corequisiteOf": "MAT2006",
        "prerequisiteCodes": "PHY2005"
      },
      {
        "slot": "D",
        "code": "INT3002",
        "title": "Advanced Microscopy: Theory and Applications",
        "coordinator": "Dimitris Kapsokalyvas",
        "corequisite": false,
        "prerequisite": true,
        "days": ["TuePM", "WedPM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "PHY1001/PHY1101"
      },
      {
        "slot": "D",
        "code": "NEU2005",
        "title": "Systems Neuroscience",
        "coordinator": "Daan van Beek",
        "corequisite": false,
        "prerequisite": true,
        "days": ["TuePM", "WedPM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "NEU1001/BIO2007"
      },
      {
        "slot": "D",
        "code": "PHY3009",
        "title": "Hamiltonian and Lagrangian Mechanics",
        "coordinator": "Gideon Koekoek",
        "corequisite": true,
        "prerequisite": true,
        "days": ["TuePM", "WedPM"],
        "corequisiteOf": "PHY2011",
        "prerequisiteCodes": "PHY2001/PHY1003"
      },
      {
        "slot": "D",
        "code": "PHY2012",
        "title": "Structure of Matter",
        "coordinator": "Alex Amato",
        "corequisite": true,
        "prerequisite": true,
        "days": ["TuePM", "WedPM"],
        "corequisiteOf": "PHY2012",
        "prerequisiteCodes": "PHY2002"
      },
      {
        "slot": "E",
        "code": "BIO2004",
        "title": "General Zoology",
        "coordinator": "John Sloggett",
        "corequisite": false,
        "prerequisite": false,
        "days": ["WedAM", "ThuAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "E",
        "code": "CHE3006",
        "title": "Quantum Chemistry",
        "coordinator": "Slava Vieru",
        "corequisite": true,
        "prerequisite": true,
        "days": ["WedAM", "ThuAM"],
        "corequisiteOf": "PRA3018",
        "prerequisiteCodes": "MAT2006/MAT2009"
      },
      {
        "slot": "E",
        "code": "INT2013",
        "title": "Fundamentals of Science Education",
        "coordinator": "May Lee",
        "corequisite": false,
        "prerequisite": true,
        "days": ["WedAM", "ThuAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": "PRO1002"
      },
      {
        "slot": "E",
        "code": "PHY2006",
        "title": "Electronics",
        "coordinator": "Bart van Grinsven",
        "corequisite": true,
        "prerequisite": false,
        "days": ["WedAM", "ThuAM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      },
      {
        "slot": "S",
        "code": "INT3201",
        "title": "Island Studies: Life and Landscape",
        "coordinator": null,
        "corequisite": true,
        "prerequisite": true,
        "days": [],
        "corequisiteOf": "INT3202",
        "prerequisiteCodes": "PRA2009/INT1007/INT2012"
      },
      {
        "slot": "S",
        "code": "INT3202",
        "title": "Island Studies: The Mediterranean Region",
        "coordinator": null,
        "corequisite": true,
        "prerequisite": false,
        "days": [],
        "corequisiteOf": "INT3201",
        "prerequisiteCodes": null
      },
      {
        "slot": null,
        "code": "PRA1101",
        "title": "Introduction to Scientific Research I",
        "coordinator": "Chris Pawley & Erik Steen Redeker",
        "corequisite": true,
        "prerequisite": true,
        "days": ["FriAM", "FriPM"],
        "corequisiteOf": "CHE1101",
        "prerequisiteCodes": "MSP1000"
      },
      {
        "slot": null,
        "code": "PRA2003",
        "title": "Programming Skill",
        "coordinator": "Panos Christakoglou",
        "corequisite": true,
        "prerequisite": false,
        "days": ["WedAM", "WedPM"],
        "corequisiteOf": "MAT2007",
        "prerequisiteCodes": null
      },
      {
        "slot": null,
        "code": "PRA2006",
        "title": "Electronics Lab",
        "coordinator": "Bart van Grinsven",
        "corequisite": true,
        "prerequisite": false,
        "days": ["TueAM", "TuePM", "ThuAM", "ThuPM"],
        "corequisiteOf": null,
        "prerequisiteCodes": null
      }
    ]
  }
];