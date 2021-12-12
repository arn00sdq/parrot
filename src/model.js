import { profil_icon } from "./database/images";
const data = {
  config: {
    authors: "Made by DUDES Arnaud and ALONSO Ivan @UPPA",
  },
  path: {
    currentPath: "exercisePage",
  },
  user: {
    name: "Default User",
    icon: profil_icon,
    selectedLanguage: "English (US)",
    featherCount: "4",
    flameCount: "2",
    exercisesDone: [{id: "EX1"}],
    lessonsRead: [{id: "LE1"}],
    papersRead: [{id: "PA1"}],
  },
  home: {
    progression: {
      dailyChallenge: [
        {
          id: "1",
          completed: false,
          rewards: {
            feathers: "0",
            treasures: "3",
          },
        },
      ],
      dailyObjectives: [
        {
          id: "1",
          progression: {
            count: "0",
            total: "2",
          },
        },
      ],
      nextAward: {
        currentXP: "5",
        totalXP: "10",
      },
    },
    dashboard: {
      section: "recentActivities",
      recentActivities: {
        activities: [
          {
            id: "1",
            progress: "100",
          },
        ],
      },
      activitiesSummary: {
        helpBtnToggle: false,
        activities: [
          {
            id: "1",
          },
        ],
      },
      suggestedLessons: {
        lessons: [
          {
            id: "1",
          },
        ],
      },
    },
    trainReading: {
      articles: [
        {
          id: "1",
        },
      ],
      categories: [
        {
          id: "1",
        },
      ],
      moreCategoriesBtnToggle: false,
    },
  },
  skillPage: {
    elementary: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
    independant: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
    advanced: {
      locked: false,
      exercises: [
        {
          id: "EX1",
        },
      ],
    },
  },
  exercisePage: {
    exerciseId: "EX1",
    step: "0",
    wordDrift : {
      life : 3,
      points : 0,
    }
  },
  exercisePicker: {
    keywords_input : "",
    selectedThemes: [],
    selectedLevels: []
  },
  lessonPage: {
    lessonId: "LE1",
    step: 0,
  },
  lessonPicker: {
    keywords_input : "",
    selectedTenses: [],
    selectedLevels: []
  },
  paperPage: {
    paperId: "PA1",
    step: "0",
  },
  paperPicker: {
    keywords_input : "",
    selectedThemes: [],
    selectedLevels: []
  },
};

export { data };
