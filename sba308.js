// SBA 308

//creating Data: 

const CourseInfo = [
  {
    "id": 123,
    "name": "JS Fundamentals",
  }  
]

const AssigmentGroup = [
  {
    "id": 1111,
    "name": "Function Fun",
    // the ID of the course the assignment group belongs to
    "course_id": 123,
    // the percentage weight of the entire assignment group
    "group_weight": 25,
    "assignments": [
      {
        id: 1,
        name: "Create a function",
        due_at: "2024-02-06",
        points_possible: 100
      }
    ],
  }
]

const LearnerSubmission = [
  {
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
  }
]

//Analyzing Data
