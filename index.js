// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      task.complete = true;
    }

  };
  return task;
}


const task1 = newTask("Clean Cat LItter", "Take all the poop out of the litter box");
const task2 = newTask("Do Laundry", "underwear");
const tasks = [task1, task2];

// // DRIVER CODE BELOW

task1.logState();
task1.markCompleted();
task1.logState();
