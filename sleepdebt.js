/* Function that uses a switch statement to determine how many hours of sleep each night */
const getSleepHours = day => {
    switch(day){
        case 'monday':
            return 7
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednesday':
            return 7
            break;
        case 'thursday':
            return 7
            break;
        case 'friday':
            return 10
            break;
        case 'saturday':
            return 10
            break;
        case 'sunday':
            return 7
            break;
        defualt:
            return 'error'
    }
};
/* testing purposes
console.log(getSleepHours('wednesday'));
*/

/* function to get the TOTAL number of hours slept*/
const getActualSleepHours = () => {
    return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday')
};
  
/* function to get the ideal, prefered, sleep hours. */
const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
};

/* for testing purposes
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/

/*function to calculate sleep debt*/
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
        return 'You had a perfect night\'s rest.';
    } else if(actualSleepHours > idealSleepHours){
        return 'Hey sleepyhead, you overslept by ' + (actualSleepHours - idealSleepHours) + ' hours this week.';
    } else if(actualSleepHours < idealSleepHours){
        return 'You need to catch up on your sleep. Get ' + (idealSleepHours - actualSleepHours) + ' more hour(s) to catch up on sleep for the week!';
    } else {
        return 'Error! Something went wrong.';
    }
};


console.log('Your ideal sleep hours for the week is ' + getIdealSleepHours());
console.log('The actual time you spent sleeping this week was ' + getActualSleepHours());
console.log(calculateSleepDebt());