 "use strict"
        function customReduceFunction(numberList, findGreatestPassedFunction) {
            let currentLargest=numberList[0];
            for (let i = 1; i < numberList.length; i++) {
                currentLargest = findGreatestPassedFunction(currentLargest,numberList[i]);
            }
            return currentLargest;
        }
        function findGreatestFunc(currentGreatest, num) {
            return currentGreatest>=num?currentGreatest:num;
        }

        let numberList = [100, 32, 140, 45, 30 , 200, 10];
        //Displaying Orignal Value to the screen
        document.getElementById("numberList-original").innerHTML = numberList;


        let result = customReduceFunction(numberList,findGreatestFunc);
  
        //Displaying Update Value to the screen
        document.getElementById("numberList-reduced").innerHTML = result;
   