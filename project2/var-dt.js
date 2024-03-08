let todoList = [];

function addTask(description, category) {
    todoList.push({ description, category, completed: false });
    console.log(`Task "${description}" in category "${category}" has been added.`);
}
addTask("purchasing food", "bying");
addTask("to learn on assingment", "Study");
addTask("lseaving out", "to revise on subjects and making other home activities");
addTask("workin on javaScript", "test");

// Function to display tasks grouped by their categories
function tasksByCategory() {
    const tasksByCategory = {};

    todoList.forEach(task => {
        if (!tasksByCategory[task.category]) {
            tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
    });

    console.log("Tasks by Category:");
    for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach(task => {
            console.log(`- ${task.description} (${task.completed ? 'Completed' : 'Pending'})`);
        });
    }
}

tasksByCategory();

function markTaskCompleted(description) {
    const task = todoList.find(task => task.description === description);
    if (task) {
        task.completed = true;
        console.log(`Task "${description}" marked as completed.`);
    } else {
        console.log(`Task "${description}" not found.`);
    }
}

function removeTask(description) {
    const index = todoList.findIndex(task => task.description === description);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log(`Task "${description}" removed.`);
    } else {
        console.log(`Task "${description}" not found.`);
    }
}

markTaskCompleted("Study for exam");
removeTask("Walk out");
