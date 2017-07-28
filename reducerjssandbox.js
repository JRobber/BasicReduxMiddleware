
let arr = [1,15,5,7,5];

let sum = arr.reduce(function(currentValue, nextValue){
    currentValue;
    nextValue;
    let lastSum = currentValue.length > 0 ? currentValue[currentValue.length-1] : 0
    let nextSum = lastSum + nextValue;
    currentValue.push(nextSum);
    return currentValue;
}, [])

sum;

let mashedObj = Object.assign({age: "30ish"}, {name:"Jeremy", eyeColor: "Blue"}, {hair: "Yes"})
mashedObj;

let personInfo = [{age: "30ish"}, {name:"Jeremy", eyeColor: "Blue"}, {hair: "Yes"}]

let finalPerson = personInfo.reduce(function(currentObj, nextObj){
    return Object.assign({}, currentObj, nextObj)
})

finalPerson;

function reducer(currentState, nextState){
    return Object.assign(currentState, nextState);
}

let nextPerson = reducer(finalPerson, {aje: "a little older than 30ish"})
nextPerson;

function updateAge(age){
    return {
        yearValue: age
    }
}

let nextPerson2 = reducer(nextPerson, updateAge(3))
nextPerson2