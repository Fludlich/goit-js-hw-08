
import throttle from "lodash.throttle";

let getEl = x => document.querySelector(x)

const form =getEl('.feedback-form')
const input = getEl('input')
const textarea = getEl('textarea')
const STORAGE = "feedback-form-state"
const storage = {
    // email: '',
    // message: '',
}
gar={}

form.addEventListener('submit', sendUReq)


reload()

form.addEventListener('input', throttle(sett, 500))

function sett (event){
    storage[event.target.name]=event.target.value
    localStorage.setItem(STORAGE, JSON.stringify(storage))
    gar[event.target.name] = event.target.value
//    console.log(gar)
console.log(Object.values(gar))
// console.log([form.value])
console.log(gar)
}

function sendUReq (event){

   

    event.preventDefault();
  
    console.log(JSON.parse(localStorage.getItem(STORAGE)))
    conbsole.log(storage)
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE)
    // console.log(Object.keys(storage))
  clean()
}
function clean (){
    storage.message = ''
    storage.email = ''
}

function reload () {
    const user = localStorage.getItem(STORAGE)
    if (user){
     
              
        const split =  JSON.parse(user)

        input.value = split.email
        textarea.value = split.message

         storage.email = split.email
         storage.message = split.message
         console.log('dfsgrt')
        //  for (const value of formData.values()) {
        //     console.log(value);
        //   }
        

    }

const innn = document.querySelectorAll('.feedback-form [name]')
// const arrarar = {...innn}
// console.log(arrarar)
for (let index = 0; index <=innn.length; index++) {
    let element =innn[index];
    console.log(element.value)
}
arrarar.forEach(el=>{
    console.log(el.value)
})
//   console.log(form.value = gar.value)
//   console.log(FormData.value = gar)
    // let gar = [storage]

    //     gar.forEach(function(ar){
    //     console.log(ar)
        
    //     console.log(form.value)
    //     })
        
       
}
console.log(storage)