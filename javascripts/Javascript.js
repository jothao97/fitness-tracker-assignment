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
const workout= [
    {date: 1/1/24, workout: "jumping jacks", summary: "1 minute of jumpingjacks"},
    {date: 1/2/24, workout: "high knees", summary: "1 minute of high knees"},
    {date: 1/5/24, workout: "planks", summary: "1 minute of planks"},
    {date: 1/5/24, workout: "crunches", summary: "1 minute of crunches"},
];

// filter daily workouts (1/5/24 is daily workout)
function filterDailyWorkouts(dailyWorkoutArray){
    let otherDates