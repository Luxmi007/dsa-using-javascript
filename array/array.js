/**
 *  Given a sorted array of integers, return a new array containing the squares of each number, also sorted in non-decreasing order.
    *  Example:
    *  Input: [-4,-1,0,3,10]
    *  Output: [0,1,9,16,100]
    *  Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].
 */
function sortedSquares(array){

    // method 1
    // const newArray = new Array(array.length).fill(0);
    // for(let i = 0; i < array.length; i++)
    //     newArray[i] = array[i]*array[i];
    //     newArray.sort((a,b) => (a-b));
        
    //     return newArray;

    // method 2

    const newArray = new Array(array.length).fill(0);
    let pointLeft = 0;
    let pointRight = array.length - 1;

    for ( let i = array.length -1; i >= 0; i--) {
        const left = Math.pow(array[pointLeft],2);
        const right = Math.pow(array[pointRight], 2);

        if ( left > right){
            newArray[i] = left;
            pointLeft++;
        }
        else {
            newArray[i] = right;
            pointRight--;
        }
    }
    return newArray;
}