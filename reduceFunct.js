
        function customReduceFunction(numberList, findGreatestPassedFunction) {
            let currentLargest=numberList[0];
            for (let i = 1; i < numberList.length; i++) {
                currentLargest = findGreatestPassedFunction(currentLargest,numberList[i]);
            }
            return currentLargest;
        }

        let numberList = [2,5,15,90,400,6];
        //Displaying Orignal Value to the screen
        document.getElementById("numberList-reduce-original").innerHTML = numberList;


        let result = customReduceFunction(numberList,
            (currentGreatest,num)=>currentGreatest>=num?currentGreatest:num
            );
  
        //Displaying Update Value to the screen
        document.getElementById("numberList-reduced").innerHTML = result;
   