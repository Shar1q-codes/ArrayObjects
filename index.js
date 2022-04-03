let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 



// Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']
// ANS
let result=studentRecords.map((large)=>large.name.toUpperCase())
console.log(result)


// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let result1=studentRecords.filter((greater)=>greater.marks>50)
console.log(result1)


// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let result2=studentRecords.filter((more)=>more.marks>50&&more.id>120)
console.log(result2)

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

  let sum=studentRecords.reduce((acc,curr)=>acc=acc+curr.marks,0);
  console.log(sum)


// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

 let result4=studentRecords.filter((moree)=>moree.marks>50).map((moree)=>moree.name)
 console.log(result4)



// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let result5=studentRecords.filter((greaterthan120)=>greaterthan120.id>120).reduce((acc,curr)=>acc=acc+curr.marks,0);
console.log(result5)



// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

 let totalsum=studentRecords.map(function(total){
     if(total.marks<50){
         total.marks=total.marks+15;
     }
     return total;
 })
 .filter((total)=>total.marks>50).reduce((acc,curr)=>acc=acc+curr.marks,0);
 console.log(totalsum)




// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 



obj1={name:'Sachin',class:'2',rollno:'10'}
obj2={name:'vivek',class:'3',rollno:'11'}
obj3={name:'anurag',class:'4',rollno:'12'}
obj4={name:'niket',class:'5',rollno:'13'}
obj5={name:'vicky',class:'6',rollno:'14'}
obj6={name:'ranu',class:'7',rollno:'15'}

let students=[

{name:'Sachin',class:'2',rollno:'10'},
{name:'vivek',class:'3',rollno:'11'},
{name:'anurag',class:'4',rollno:'12'},
{name:'niket',class:'5',rollno:'13'},
{name:'vicky',class:'6',rollno:'14'},
{name:'ranu',class:'7',rollno:'15'},
]

console.log(students)