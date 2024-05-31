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
      }, 
      {
        id: 3, 
        name: "Arrow Functions",
        due_at: "2024-04-20",
        points_possible: 100
      },
      {
        id: 4, 
        name: "Arrow Functions",
        due_at: "2024-05-20",
        points_possible: 60
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
    "assignment_id": 3,
    "submission": {
      "submitted_at": "2024-04-12",
      "score": 79
    }
  },
  {
    "learner_id": 443,
    "assignment_id": 2,
    "submission": {
      "submitted_at": "2024-06-02",
      "score": 0
    }
  },
  {
    "learner_id": 443,
    "assignment_id": 4,
    "submission": {
      "submitted_at": "2024-05-22",
      "score": 55
    }
  },
  {
    "learner_id": 445,
    "assignment_id": 4,
    "submission": {
      "submitted_at": "2024-05-22",
      "score": 55
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

function getLearnerData(/*CourseInfo,*/ AssignmentGroup, LearnerSubmission) {
  const learnerResults = {};
  try {
    LearnerSubmission.forEach(submission => {
      let userid = submission["learner_id"]
      if (!userid) {
        throw new Error ("No Students have submitted assignments")
      }
      if (!learnerResults[userid]) {
        learnerResults[userid] = {
          "Student Points": 0,
          "Possible Points": 0,
          "Student Grade": 0,
          assignments: []
        }
      }
    })
  
    for (let i = 0; i < AssignmentGroup.length; i++) {
      for (let y = 0; y < AssignmentGroup[i].assignments.length; y++) {
        let currentAssignment = AssignmentGroup[i].assignments[y];
        if (currentAssignment.due_at < "2024-06-03") {
          let pointsPossible = currentAssignment.points_possible;
  
          for (let x = 0; x < LearnerSubmission.length; x++) {
            let currentSubmission = LearnerSubmission[x];
            if (currentSubmission.assignment_id === currentAssignment.id) {
              let studentScore = currentSubmission.submission.score;
              if (currentSubmission.submission.submitted_at > currentAssignment.due_at){
                studentScore *= 0.9;
              }
  
              let learner_id = currentSubmission.learner_id;
              if (!learner_id) {
                throw new Error ("No learner in Learner Submission")
              }
  
              if (learnerResults[learner_id]) {
                learnerResults[learner_id]["Student Points"] += studentScore;
  
                learnerResults[learner_id].assignments.push({
                  assignment_id: currentAssignment.id,
                  grade : (studentScore / pointsPossible) * 100
                });
              }
            }
          }
        }
      }
    }
  
    for (let learner_id in learnerResults) {
      let possiblePoints = 0;
      for (let i = 0; i < AssignmentGroup.length; i++) {
        for (let y = 0; y < AssignmentGroup[i].assignments.length; y++) {
          let currentAssignment = AssignmentGroup[i].assignments[y];
          if (currentAssignment.due_at < "2024-06-03") {
            possiblePoints += currentAssignment.points_possible;
          }
        }
      }
      learnerResults[learner_id]["Possible Points"] = possiblePoints;
    }
  
    for (let learner_id in learnerResults) {
      let totalScore = learnerResults[learner_id]["Student Points"];
      let totalPossible = learnerResults[learner_id]["Possible Points"];
      learnerResults[learner_id]["Student Grade"] = (totalScore / totalPossible) * 100;
    }
    console.dir(learnerResults, { depth: null });

  } catch (error) {
    console.error("There is an error:", error);
  }
}



getLearnerData(/*CourseInfo,*/ AssignmentGroup, LearnerSubmission);




