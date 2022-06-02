// Refactor the following function to use a Promise instead
const studentAsleep = false;
const studentLearning = false;

function watchInstructorDemo() {
    return new Promise((resolve, reject) => {
        if (studentAsleep) {
            reject({
                event: "Student is sleeping.",
                message: "Instructor needs to be more fun.",
            });
          } else if (studentLearning === false) {
            reject({
              event: "Student is not learning.",
              message: "Instructor needs to be more fun.",
            });
          } else {
            resolve("We are all totally getting this!");
          }
    })
  
}

const success = (message) => {
    console.log(message);
}


watchInstructorDemo()
.then(success)
.catch((error) => {
    console.log(error);
})



