function speedLimit(currSpeed, area) {
    let speedOverTheLimit;
    let allowedSpeed = 0;
    let output = '';
    if (area == 'city') {
        allowedSpeed = 50;
        speedOverTheLimit = currSpeed - 50;
    } else if (area == 'residential') {
        allowedSpeed = 20;
        speedOverTheLimit = currSpeed - 20;
    } else if (area == 'interstate') {
        allowedSpeed = 90;
        speedOverTheLimit = currSpeed - 90;
    } else if (area == 'motorway') {
        allowedSpeed = 130;
        speedOverTheLimit = currSpeed - 130;
    }
    if (speedOverTheLimit > 0) {
        output +=`The speed is ${speedOverTheLimit} km/h faster than the allowed speed of ${allowedSpeed} - `;
        if (speedOverTheLimit <= 20) {
            output += 'speeding';
        } else if (speedOverTheLimit > 20 && speedOverTheLimit <= 40) {
            output += 'excessive speeding';
        } else if (speedOverTheLimit > 40) {
            output += 'reckless driving';
        }
    }else {
        output = `Driving ${currSpeed} km/h in a ${allowedSpeed} zone`;
    }
    return output;
}