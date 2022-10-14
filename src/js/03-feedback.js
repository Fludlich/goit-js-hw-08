
import throttle from "lodash.throttle";

let getEl = x => document.querySelector(x)

const form =getEl('.feedback-form')
const input = getEl('input')
const textarea = getEl('textarea')
const STORAGE = "feedback-form-state"



form.addEventListener('submit', sendUReq)
const storage = {}
reload()
form.addEventListener('input', throttle(sett, 500))

function sett (event){
    storage[event.target.name]=event.target.value
    console.log(storage)
    localStorage.setItem(STORAGE, JSON.stringify(storage))
}

function sendUReq (event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE)
}

function reload (event){
    const user = localStorage.getItem(STORAGE)
    if(user){
       const split =  JSON.parse(user)
        input.value = split.email
        textarea.value = split.message
    }

}
console.log(storage)