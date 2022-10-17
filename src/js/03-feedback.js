
import throttle from "lodash.throttle";

let getEl = x => document.querySelector(x)

const form =getEl('.feedback-form')
const input = getEl('input')
const textarea = getEl('textarea')
const STORAGE = "feedback-form-state"
const storage = {
    email: '',
    message: '',
}

form.addEventListener('submit', sendUReq)


reload()

form.addEventListener('input', throttle(sett, 500))

function sett (event){
    // console.log(event)
    storage[event.target.name]=event.target.value
    // console.log(storage)
    localStorage.setItem(STORAGE, JSON.stringify(storage))
}

function sendUReq (event){
    event.preventDefault();
    console.log(input.value.length)
    // if(input.value.length===0){
  
    //     storage.email = ''
       
    // }
    // if(textarea.value.length===0){
    //     storage.message = ''
    // }

    console.log(storage)
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE)
   storage.message = ''
   storage.email = ''
}

function reload () {
    const user = localStorage.getItem(STORAGE)
    if (user){
        const split =  JSON.parse(user)
        console.log(user)
        input.value = split.email
        textarea.value = split.message
         storage.email = split.email
         storage.message = split.message
    }
    
      
    

}
console.log(storage)