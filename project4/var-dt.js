
//4.Build a task scheduler that allows users to create, update, and delete tasks with due dates. Each task should be represented as an object with properties like title, description, and due date.

//Requirements:
//1.Implement functions to add tasks with due dates to the scheduler.
//2.Create a function to display tasks sorted by their due dates.
//3.Develop a function to update task details or mark tasks as completed.
//4.Allow users to remove tasks from the scheduler.  

 // Task Scheduler
 let tasks = [];

 // Function to add tasks with due dates to the scheduler
 function addTask(title, description, dueDate) {
     tasks.push({
         title: title,
         description: description,
         dueDate: dueDate,
         completed: false
     });
     console.log("Task added successfully!");
 }
 
 // Function to display tasks sorted by their due dates
 function displayTasksSortedByDueDate() {
     tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
     console.log("Tasks sorted by due date:");
     tasks.forEach(task => {
         console.log(`Title: ${task.title}`);
         console.log(`Description: ${task.description}`);
         console.log(`Due Date: ${task.dueDate}`);
         console.log(`Completed: ${task.completed ? "Yes" : "No"}`);
         console.log("---------------------");
     });
 }
 
 // Function to update task details or mark tasks as completed
 function updateTask(title, newTitle, newDescription, newDueDate, markCompleted) {
     const index = tasks.findIndex(task => task.title === title);
     if (index !== -1) {
         tasks[index].title = newTitle || tasks[index].title;
         tasks[index].description = newDescription || tasks[index].description;
         tasks[index].dueDate = newDueDate || tasks[index].dueDate;
         if (markCompleted !== undefined) {
             tasks[index].completed = markCompleted;
         }
         console.log("Task updated successfully!");
     } else {
         console.log("Task not found!");
     }
 }
 
 // Function to remove tasks from the scheduler
 function removeTask(title) {
     const index = tasks.findIndex(task => task.title === title);
     if (index !== -1) {
         tasks.splice(index, 1);
         console.log("Task removed successfully!");
     } else {
         console.log("Task not found!");
     }
 }
 
 // Example usage:
 addTask("Complete project", "Finish coding and documentation", "2024-03-15");
 addTask("Meeting with client", "Discuss project progress", "2024-03-10");
 addTask("Buy groceries", "Milk, eggs, bread", "2024-03-08");
 displayTasksSortedByDueDate();
 console.log("---------------------");
 updateTask("Complete project", undefined, undefined, undefined, true);
 displayTasksSortedByDueDate();
 console.log("---------------------");
 removeTask("Meeting with client");
 displayTasksSortedByDueDate();