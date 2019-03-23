const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Breaking Bad',
      days: 1,
      hours: 22,
      minutes: 30,
    },
    {
      title: 'Black Mirror',
      days: 0,
      hours: 16,
      minutes: 30,
    }
  ]


function howMuchTime(d){
    let a=seriesDurations[d].days,
        b=seriesDurations[d].hours,
        c=seriesDurations[d].minutes;
    let timeInYear= ((c/60/24)/365)+((b/24)/365)+a/365;//a is days, b is hours and c is hours
    return timeInYear;
}


let timeSpent1 = howMuchTime(0),
    timeSpent2 = howMuchTime(1),
    timeSpent3 = howMuchTime(2),
    totalTimeSpent = timeSpent1+timeSpent2+timeSpent3;

function percentOfAvgLife(a){
    let percentage = ((a*100)/80).toFixed(3) +"%";
    return percentage;
}

let percentage1 = percentOfAvgLife(timeSpent1),
    percentage2 = percentOfAvgLife(timeSpent2),
    percentage3 = percentOfAvgLife(timeSpent3),
    totalPercentage = percentOfAvgLife(totalTimeSpent);

console.log(seriesDurations[0].title+" took "+percentage1+" of my life"+"\n"
        + seriesDurations[1].title+" took "+percentage2+" of my life"+"\n"
        + seriesDurations[2].title+" took "+percentage3+" of my life"+"\n"
        + "In total that is "+totalPercentage+" of my life");