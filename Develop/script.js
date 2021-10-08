var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

var tasks = [];

//New Task function
function newTask(taskHour, taskDescription) {
  localStorage.setItem(taskHour, taskDescription);
}

//Return Task function

function displayTask(taskHour, taskDescription) {
  var taskId;
  var description;
  for (i = 9; i < 18; i++) {
    // Loop through all values
    if (localStorage.getItem(i)) {
      //Store Value
      detail = localStorage.getItem(i);
      taskID = "#Task" + i.toString();
      $(taskId).html(description);
    }
  }
}

// Time Task Colors

function taskColor(time) {
  let taskId;
  let taskColumn;
  let taskLock;
  if (!time) {
    currentHour = moment().format("HH");
  } else {
    currentHour = time;
  }

  for (var i = 9; i < 18; i++) {
    taskId = "#Task" + i.toString();
    taskColumn = taskID + "Col2";
    taskColumn3 = taskID + "Col3";
    taskLock = taskID + "Lock";
    if (i < parseInt(currentHour)) {
      // task current hour
      $(taskId).addClass("past");
      $(taskId).removeClass("present");
      $(taskId).removeClass("future");
      //Set Task columns
      $(taskColumn).addClass("past");
      $(taskColumn).removeClass("present");
      $(taskColumn).removeClass("future");
        //set lock task image
      $(taskLock).attr("src", "./assets/images/lock.png");

      $(taskID).attr("contentedit", "false");
      //Display expired task
      $(taskColumn3).attr("id", "expired");
    } else if (i === parseInt(currentHour)) {
      // Make Task Urgent
      $(taskId).addClass("present");
      $(taskId).removeClass("future");
      $(taskColumn).addClass("present");
      $(taskColumn).removeClass("future");
    } else {
      // Display Future
      $(taskId).addClass("future");
      $(taskColumn).addClass("future");
    }
  }
}


$("#currentDay").html(currentDate)

displayTask (); 

let EOD = moment({hour: 18, minute: 1})

if (!manualTime){

    manualTime = moment()
}

var dayInterval = moment.duration(EOD.diff(manualTime))
