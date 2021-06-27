function howLongDoesItTakes(numberOfSteps, lengthOfFootprint, speedOfStudent){
    let distanceInMeters = (numberOfSteps*lengthOfFootprint);
    let bonusBreaks = Math.floor(distanceInMeters/500)*60;
    let speed = speedOfStudent*1000/3600;
    let time = distanceInMeters/speed+bonusBreaks;

    const hours = Math.floor(time/60/60).toFixed(0).padStart(2, '0');
    const minutes = Math.floor((time-hours*3600)/60).toFixed(0).padStart(2,'0');
    const seconds = (time-hours*60*60-minutes*60).toFixed(0).padStart(2,'0');

    return(`${hours}:${minutes}:${seconds}`)
}