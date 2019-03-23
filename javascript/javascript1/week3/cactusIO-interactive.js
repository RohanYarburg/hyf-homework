let activities= new Array;
                // time limit in total
let timeLimit=120;

                //  time limit for each activity

let activityTimeLimit=30;

                // adding activity function

function addActivity(date, activity, duration){
    let activityObj= new Object;
    activityObj.date= new Date();
    activityObj.activity=activity;
    activityObj.duration=duration;

    activities.push(activityObj);
}

addActivity('23/7-18', 'Youtube', 50);
addActivity('23/7-18', 'Facebook', 60);
addActivity('23/7-18', 'instagram', 40);

console.log (activities);

                     // status function

function showStatus(){
    activitiesNum=0;
    timeAmount=0;
                    // if no activities registered
    if (activities.length==0) {
        console.log("Add some activities before calling showStatus")
    }           
                    // showing status
    
    else {
        for (let i = 0; i< activities.length; i++) {
            timeAmount+=activities[i].duration;
            activitiesNum++;       
        }
        console.log("You have added "+activitiesNum+
        " activities. They amount to "+timeAmount+" min. of usage")
    }

    if ( timeAmount> timeLimit ) {
       console.log("You have reached your limit, no more smartphoning for you!")
    }
}
                    // each activity limit function

function activityLimit(a){
    if ( activities[a-1].duration> activityTimeLimit) {
        console.log("enough using of "+activities[a].activity+" for today");
    }
}

showStatus();
activityLimit(1);