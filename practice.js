
const normal=function(x,y){
    return x*y;
}
console.log(normal(8,8));

//Arrow Function

const x = (x, y) => x * y;

const result=x(10,30);
console.log(result);


//....................Undefined.........................

let num;   // varible value not set
console.log(num);


function add(num1, num2){
    
    const sum=num1+num2;
    // without return show undefined

}
var sum=add(100,20);
console.log(sum)

   //....................Map.....................

const numbers=[10,20,30,40,50,60];
var outPut=[]
for(let i=0;i<numbers.length;i++){
    const element=numbers[i];
    const result=element*element;
    outPut.push(result);
}
console.log(outPut);

const mapResult=numbers.map(num=>num*num);

console.log(mapResult);


const output=[]
function square(numA){
    for (let i = 0; i < numA.length; i++) {
        const element = numA[i];
        const result= element*element;
        output.push(result);
        
    }
}

square([10,20,30,40,50,60]);
console.log(output)

const number=[10,20,30,40,50,60]
const filRe=number.filter(fill=>fill>30);
console.log(filRe);

// .....................Object................

const students=[
    {id:21, Name:"Mahfuz Ahmed"},
    {id:22, Name:"Nafiz Khan"},
    {id:23, Name:"Soiob Akter"},
    {id:24, Name:"Saki AL Hasan"},
]

const output=[];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const name=element.Name;
    output.push(name);
}

console.log(output)

///..............Method................

const normalPerson={
   firstName:"Mahfuz",
   lastName:"Ahmed",
   selary:20000,

   getFullName:function(){
     return this.firstName +" "+this.lastName;
   },

   getSelary:function(amount,tax,tips){

      this.selary=this.selary-amount-tax-tips;
      return this.selary;

   }
}

const newPerson={
   firstName:"Abdul",
   lastName:"Kader Molla",
   selary:26000
}

const teacherPerson={
   name:"Tohid",
   selary:15000
}

const fullName=normalPerson.getFullName();
console.log(fullName);


const selary=normalPerson.getSelary(12000);
console.log(selary);

// ..............Bind.......................

const newBind=normalPerson.getSelary.bind(newPerson);
newBind(12000);
console.log(newPerson.selary);

// ..............Call.......................

normalPerson.getSelary.call(newPerson,1500,100,400);
console.log(newPerson.selary);

normalPerson.getSelary.call(teacherPerson,1000,100,400);
console.log(teacherPerson.selary);

// ...............Apply......................

normalPerson.getSelary.apply(newPerson,[1000,500,500]);
console.log(newPerson.selary);


//...................Class And Constractor....................
class Person{
   constructor(firstName,salary){
         this.FirstName=firstName;
         this.Salary=salary;
   }
}

const personSalry=new Person("Mahfuz ahmed",20000);

console.log(personSalry);

//....................This Keyword................

const person={
   name:"Mahfuz Ahmed Babu",
   getName:function(){
      console.log(this)
      return this.name;
   }
}

const newPerson={
   name:"Abdulla bin Lotif"

}

newPerson.getName=person.getName;
newPerson.getName();

