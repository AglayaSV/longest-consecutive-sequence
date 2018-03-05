module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let qS = function(array){

        let resultArray = [];

        if (array.length < 2){
            return array;
        }

        let index = Math.floor(Math.random()*(array.length));
        let pivot = array[index];
        array.splice(index,1);

        let less = [];
        let greater = [];

        for (let i=0; i <= array.length - 1; i++) {

            if (array[i] <= pivot) {
                less.push(array[i]);
            }
            else {

                if (array[i] > pivot) {
                    greater.push(array[i]);
                }
            }

        }

        return resultArray.concat(qS(less),pivot, qS(greater));
    };

    function returnMaxSeries(sortedArray) {
        if (sortedArray.length === 0){
            return 0;
        }
        let tempRes = 1;
        let counter = 1;
        for (let i = 0; i < sortedArray.length-1; i++) {
            if (Math.abs(sortedArray[i] - sortedArray[i + 1]) === 1) {
                counter++;
            } else if (Math.abs(sortedArray[i] - sortedArray[i + 1]) === 0){
                continue;
            }
            else if (counter >= tempRes) {
                tempRes = counter;
                counter = 1;
            }else {
                counter = 1;
            }
        }
        return tempRes;
    }
    return returnMaxSeries(qS(array));
}
