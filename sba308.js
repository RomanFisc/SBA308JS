// SBA 308

//creating Data: 

const CourseInfo = [
  {
    "id": 123,
    "name": "JS Fundamentals",
  }  
]

const AssignmentGroup = [
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
      }, 
      {
        id: 2, 
        name: "arrays and loops",
        due_at: "2024-06-05",
        points_possible: 50
      }
    ],
  }
]

const LearnerSubmission = [
  {
    "learner_id": 443,
    "assignment_id": 1,
    "submission": {
      "submitted_at": "2024-02-05",
      "score": 94
    }
  }, 
  {
    "learner_id": 443,
    "assignment_id": 2,
    "submission": {
      "submitted_at": "2024-05-30",
      "score": 0
    }
  }
]

//Analyzing Data
// Create a program that outputs an array of objects
// output: 
//    - Learner ID: "id": number
//    - Learners Average "avg: number"
//      - weighted average
//      - if an assignment is not yet due it shouldn't be included in the average

//Program set up: 
// - Create function
// - Create empty array
// - get user ID and add it to the array
//    - learner submission is an array of objects. iterate over each object to find user id
// - Creating average for a specific user 
//    - let userscore = 0 
//    - let assignment score = 0
//    - If due date has passed: 
//       - iterate through assignments and total the amount of possible points and add to assignment score
//       - if User id matches the learner id iterate through and total up points and add to userscore
//    - let result = userscrore/assignment score
//    - 

function getLearnerData(/*CourseInfo, AssignmentGroup,*/ LearnerSubmission) {
  let learnerResults = {};
  LearnerSubmission.forEach(submission => {
    let userid = submission["learner_id"]
    learnerResults["learner_id"] = userid
  });
  let userscore = 0;
  let assignmentscore = 0;
  

  console.log(learnerResults)
}



getLearnerData(LearnerSubmission);