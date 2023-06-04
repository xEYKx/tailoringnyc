// ***start***  form

const url = 'https://script.google.com********';
const myForm = document.querySelector('#myForm');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const eMail = document.querySelector('#email');
const pNumber = document.querySelector('#phone');

fName.value = "Fulan";
lName.value = "eFulan";
eMail.value = "Fulan@me.com"
pNumber.value = '212-555-5555'


myForm.addEventListener('submit', submitter);
 
function submitter(e){
    e.preventDefault();
    let message = '';
    if(fName.value.length < 3){
        fName.style.borderColor = 'red'
        message += `<br>First Names needs to be 5 characters`;
    }
    if(lName.value.length < 3){
        lName.style.borderColor = 'red'
        message += `<br>Last Names needs to be 5 characters`;
    }
    if(eMail.value.length < 3){
        message += `<br>Email needs to be 5 characters`;
        // https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript - this link to validate email address using regex
    }

    if(message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color ='red';
        myForm.prepend(div);
        setTimeout(()=>{
            div.remove()
            fName.style.borderColor = '';
            lName.style.borderColor = '';
            eMail.style.borderColor = '';
            },2000)
    }else{
        const myObj ={
            firstName:fName.value,
            lastName:lName.value,
            phoneNumber:pNumber.value,
            email:eMail.value, 

        }
        addSendMail(myObj);
    }    
}

function addSendMail(data){
    fetch(url, {
        method:'POST',
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
}

function addSendMailGET(data){
    const url1 = url + '?id=100';
    fetch(url1)
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
}



// ***end***  form







// ***start***  text animation below
const txts=document.querySelector(".animate-text").children,
       txtsLen=txts.length;

let index=0;
const textInTimer=2000,textOutTimer=1800;

function animateText() {
    for(let i=0; i<txtsLen; i++){
        txts[i].classList.remove("text-in","text-out");  
    }
    
    txts[index].classList.add("text-in");
    
    setTimeout(function(){
        txts[index].classList.add("text-out");              
    },textOutTimer)
    
    setTimeout(function(){
        
        if(index == txtsLen-1){
            index=0;
        }
        else{
            index++;
        }
        animateText();
    },textInTimer); 
}
window.onload=animateText;
// ***end***  text animation below

