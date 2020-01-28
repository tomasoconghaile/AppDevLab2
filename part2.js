var x = "Hello World!";
console.log(x);
//part 2a Create an Array of strings
var myTaskArray = [];
//part 2b
//Recieves a string as a parameter called task
//It adds the task to the array.
//It prints a message in the console indicating the insertion.
//It returns the number of elements in the array after the insertion
addTask("Complete Lab ");
function addTask(task) {
    myTaskArray.push(task);
    console.log("item " + task + "has been added to the array");
    return myTaskArray.length;
}
var numberOfTasks = addTask("Eat Breafast");
console.log("the number of task to do today is " + numberOfTasks);
//part2c Create a listAllTasks function:
//It iterates over all the tasks in the array.
//It prints each array item in the console
function listAllTasks() {
    //   for(let i =0; i<myTaskArray.length; i++){
    // }
    console.log("Array contains the following items: ");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + "deleted from array");
    }
    else {
        console.log("Item " + task + " not in array");
    }
    return myTaskArray.length;
}
deleteTask("Complete Lab ");
