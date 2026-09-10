 // Weekly Goal: Calculate the total weekly task goal for a user.
function weeklyGoal(event, userName, dailyGoal, bonusTasks){
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

// Get HTML elements
let goalBtn = document.getElementById("goal-btn");
let userName = document.getElementById("user-name");
let dailyGoal = document.getElementById("daily-goal");
let bonusTasks = document.getElementById("bonus-tasks");

// On button click, calculate and output the username and total goals
goalBtn.addEventListener("click", () => weeklyGoal(event, userName, dailyGoal, bonusTasks), false);