// problem No 1 Radian to degree Conversion//
function radianToDegree(radian) {
    const dataType = typeof radian;
    if (dataType == 'number') {
        //radian to degree formula//
        let degree = radian * (180 / 3.1416);
        const result = parseFloat(degree.toFixed(2));
        return result;
    }
    else {
        return 'Please insert a valid number';
    }
}


