// Determines if the given array is monotonic (entirely non-increasing or non-decreasing)
// An array is considered monotonic if it is either entirely non-increasing or entirely non-decreasing.
var isMonotonic = function(array) {
    if (array == 0){
        return true;
    }
    const first = array[0];
    const last = array[array.length-1];

    if (first === last){
        for (let i = 0; i < array.length-1; i++){
            if (array[i] !== array[i+1])
            return false;
        }
    }

    else if (first > last){
        for (let i = 0; i < array.length-1; i++){
            if (array[i] < array[i+1])
            return false;
        }
    }

    else {
        for (let i = 0; i<array.length-1; i++){
            if (array[i] > array[i+1])
            return false;
        }
    }
    return true;
};