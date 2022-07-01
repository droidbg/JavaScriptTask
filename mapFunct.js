function customMapFunction(numberList, multiplyBy5PassedFunct) {
    const  mapOutputarray=[];
    for (let i = 0; i < numberList.length; i++) {
        const output = multiplyBy5PassedFunct(numberList[i]);
        mapOutputarray.push(output);
    }
    return mapOutputarray;
}



let numberListMap = [2,5,15,90,400,6];
//Displaying Orignal Value to the screen
document.getElementById("numberList-map-original").innerHTML = numberListMap;


let mapResult = customMapFunction(numberListMap,element=>element*5);

//Displaying Update Value to the screen
document.getElementById("numberList-maped").innerHTML = mapResult;
