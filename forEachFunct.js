

function customForEachFunction(nameList, greetingFunction) {
    const  forEachOutputarray=[];
    for (let i = 0; i < nameList.length; i++) {
        const greetedElement = greetingFunction(nameList[i]);
        forEachOutputarray.push(greetedElement);
    }
    return forEachOutputarray;
}



let nameListForEach = ["John","Lisa", "Jennie"];
//Displaying Orignal Value to the screen
document.getElementById("nameList-forEach-original").innerHTML = nameListForEach;


let forEachResult = customForEachFunction(nameListForEach,element=>("Good Morning "+element));

// Displaying Update Value to the screen
document.getElementById("nameList-forEach").innerHTML = forEachResult;
