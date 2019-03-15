function getEventWeekday(num){
    let weekdays=["friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"]
    let eventDay=num%7;
    return weekdays[eventDay];
}

console.log(getEventWeekday(14));