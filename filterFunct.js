function customFilterFunction(numberList, conditionFunction) {
    const  filterOutputarray=[];
    for (let i = 0; i < numberList.length; i++) {
        const output = conditionFunction(numberList[i]);
        output?filterOutputarray.push(numberList[i]):console.log();
    }
    return filterOutputarray;
}



let numberListFilter = [2,5,55,60,36,3,16,15,90,400];
//Displaying Orignal Value to the screen
document.getElementById("numberList-filter-original").innerHTML = numberListFilter;


let filterResult = customFilterFunction(numberListFilter,element=>(element>6 && element%2==0));

//Displaying Update Value to the screen
document.getElementById("numberList-filtered").innerHTML = filterResult;
