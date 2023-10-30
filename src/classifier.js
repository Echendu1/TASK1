
function classifier(input) {
let newinput = input.slice()
let output = {}



for(let i = 0; i < newinput.length; i++){ 
    let newDate = new Date(newinput[i].dob).getFullYear();
    newinput[i].age = (2019 - newDate);  
}


 newinput.sort( function(a, b){
    return a.age - b.age
 })



let studentGroup = []

for(let item of newinput){
    if(studentGroup.length === 0){
        studentGroup.push([item])
    }
}

for(let i =1; i<newinput.length; i ++){
   let lastGroup = studentGroup[studentGroup.length -1]
   let lastItem = lastGroup[lastGroup.length -1]

   if(newinput[i].age - lastItem.age > 5 || lastGroup.length === 3){
    studentGroup.push([newinput[i]])
   } else {
     lastGroup.push(newinput[i])
   }
}


function oldest(arr){
    let count = 0
    for(let i of arr){
        if(i.age > count){
            count = i.age
        }
    }
    return count
   
}

function sum(arr){
    let count = 0;
    for(let i of arr){
        count += i.age
    }
    return count
}

function regNoSort(arr){
    let reg = [];
    for(let i of arr){
        reg.push(+i.regNo)
    }
   return reg.sort((a,b) => a - b)
}

output.noOfGroups = studentGroup.length;

for(let i=0; i<studentGroup.length; i++){
    output[`group${i+1}`] = {
        members: studentGroup[i],
        oldest: oldest(studentGroup[i]), 
        sum: sum(studentGroup[i]),
        regNos: regNoSort(studentGroup[i]) 
    }
}

return output
}


export default classifier;
