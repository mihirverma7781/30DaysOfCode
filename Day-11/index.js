console.log('this is async js')

// callbacks
const students =[
    {name:'harry',subject:'mava'},
    {name: 'barry',subject:'java'}

]

function func2(student) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            students.push(student);
            console.log('enrolled')
            const err=false;
            if(!err){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
}
function display(){
setTimeout(() => {
    let str=''
    students.forEach((i)=>{
        str+=`<li>${i.name}</li>`
    })
    document.getElementById('students').innerHTML=str;
}, 1000);
}
stds={
    name:'mihir',
    subject:'javascript'
}
func2(stds).then(()=>{
    display();
    console.log('success')
}).catch(()=>{
    console.log('some error occured')
});
function enroll()
function enroll(student,callback){
setTimeout(() => {
    students.push(student);
    console.log('enrolled')
    callback();
}, 8000);
}

function getstudents()
function getStudents() {
    setTimeout(() => {
        let strs ='';
        
        students.forEach((element)=>{
            strs +=`<li>${element.name}</li>`
        })
    document.getElementById('students').innerHTML= strs;

    }, 1000);
}
let sd1={name:'sunny',subject:'python'}
enroll(sd1,getStudents);
getStudents();



// PROMISES : best vodeo on promises
// promise -resolve
// promise-reject
// promise-pending

function func1() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const err = false;
            if(!err){
            console.log('your promise resolved');
            resolve();
        }
            else{
                console.log('your promise reject');
            reject(); 
            }
        }, 2000);
    })
}
func1().then(()=>{
    console.log('thanks for resolving')
}).catch(()=>{
    console.log('very bad bro')

// })

// function inside then is : resolve()
// function inside catch is : reject()



// fetch api
const url = 'index.html'
console.log('hello world')
let mybtn = document.getElementById('mybtn');
let content = document.getElementsByClassName('content');

function getData(params) {
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })
}
getData();

const url = 'https://jsonplaceholder.typicode.com/posts';
console.log('hello world');
let data ='{"name":"dhjskfjshf","salary":"123","age":"23"}'
params={
    method:'post',
    headers:{'Content-Type':"application/json"},
    body: data
};
function getData() {
    fetch(url,params)
    .then(response=>response.json())
    .then(data=>console.log(data))
}
getData();

// async await

// async function harry() {
//     const response = await fetch('https://api.github.com/users')
//     const users = await response.json();
//     return users;
// }
// let a = harry();
// console.log(a)
// a.then((data)=>{
// console.log(data)
// })