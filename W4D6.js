//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age

function Student(name,date,gender,age){
 var student={}
 student.name=name;
 student.date=date;
 student.gender=gender;
 student.age=age;
 student.printout=printout;
 student.sort=sort;
 student.gendersort=gendersort;
 //array.push(student)
 return student;
 //console.log(array)
}


//Student('ahmad',20.3,'male',20)
 
 function printout(student){

   return student.name + ' ' + student.date + ' '+ student.gender
 }
   
   function sort(students){
    
    
    var result= students.sort(function(a, b){

       return a.age-b.age;
     })
     return result;
   }
    
    function gendersort(array,string){
     var arr=[]
     
     for(var i=0;i<array.length;i++){



     }

     if(string==='m' && element.gender==='male'){

      arr.push(element)

     }
if(string==='f' && element.gender==='female'){

      arr.push(element)

     }
     })
     return arr
      }

 //printout(student)
var arrayst=[Student('imad',10.2,'male',23),
Student('ahmad',1.2,'male',20),Student('ah',1.2,'male',28)]

 //printout(arrayst[1])
gendersort(arrayst,'m')


//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
