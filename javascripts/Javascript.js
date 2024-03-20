//define an array to store the daily workout
var dailyWorkout = [];

//function to add workout to the workout array
function addWorkout(date, workout, summary){
    let workout = {
        date: date,
        workout: workout,
        summary: summary
    }
    dailyWorkout.push(workout);
    console.log(dailyWorkout);
}

// example of an array of workouts
const workoutHistory= [
    {date: 1/1/24, workout: "cardio", summary: "1 minute of jumpingjacks"},
    {date: 1/2/24, workout: "strength", summary: "30 minute of smith machine"},
    {date: 1/5/24, workout: "stretching", summary: "1 minute of yoga stretching"},
    {date: 1/5/24, workout: "hiit", summary: "15 minute of pilates"},
];

// filter daily workouts (1/5/24 is daily workout)
function filterDailyWorkouts(dailyWorkoutArray){
    let otherDates = [];
    for (const date of workout) {
        if (!date(1/5/25)){
            otherDates.push(date)
        }
    }
    return otherDates;
}

// make a workout class
class workout{
    constructor (date, workoutType, summary){
        this.date= date;
        this.workoutType= workoutType;
        this.summary= summary
    }
    displayInfo(){
        return `Date: ${this.date} Workout: ${this.workoutType}, Summary: ${this.summary}`
        // example "1/3/24 workout: cardio, summary: jogged for 20 mins"
    }
}

document.addEventListener('DOMContentLoaded'), () => {
    const listElement= document.getElementById(elementId);
    listElement.innerHTML = '';
    array.forEach(element => {
        const listItem  = document.createElement('li');
        listItem.testcontent = item.displayInfo ? item.displayInfo(): `Date: ${this.date} Workout: ${this.workoutType}, Summary: ${this.summary}`
        listElement.appendChild(listItem);
    })
};

