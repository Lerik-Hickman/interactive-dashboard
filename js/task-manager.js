// Get HTML elements
let goalBtn = document.getElementById("goal-btn");
let userName = document.getElementById("user-name");
let dailyGoal = document.getElementById("daily-goal");
let bonusTasks = document.getElementById("bonus-tasks");
let taskList = document.getElementById("task-list");
let addTask = document.getElementById("add-task");
let taskName = document.getElementById("task-name");

// Create task list UI
let userTasks = document.createElement("ul");
userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

// Create task array
let myTasks = [];

// Weekly Goal: Calculate the total weekly task goal for a user.
function weeklyGoal(event, userName, dailyGoal, bonusTasks)
{
    // Prevents the form from being submitted
    event.preventDefault();

    // Output message to console
    console.log("Checking status for: " + userName.value); 
 
    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = Number(dailyGoal.value) * 5; 

    // Add bonusTasks to weeklyGoal. 
    let totalGoal = weeklyGoal + Number(bonusTasks.value); 
 
    // Output results to web page
    let output = ("User: " + userName.value + "<br>" + "Total Weekly Goal: " + totalGoal);
    document.getElementById("goal-message").innerHTML = output;
}

function addTaskToList()
{
    // Add input to task array
    myTasks.push(taskName.value);

    // Display task as new list item
    let listItem = document.createElement("li");
    userTasks.appendChild(listItem);
    listItem.textContent = myTasks[myTasks.length - 1];

    // Clear input field
    taskName.value = "";
}

// On button click, calculate and output the username and total goals
goalBtn.addEventListener("click", () => weeklyGoal(event, userName, dailyGoal, bonusTasks), false);

// On button click, add task to task array
addTask.addEventListener("click", () => addTaskToList(), false);