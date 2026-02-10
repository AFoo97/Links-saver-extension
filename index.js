import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-database.js"

 const firebaseConfig = {
    apiKey: "AIzaSyCBaOLkboY1i_wRqH3Pj5oq_owXoEa0Lp0",
    authDomain: "leads-tracker-app-bd1e1.firebaseapp.com",
    projectId: "leads-tracker-app-bd1e1",
    storageBucket: "leads-tracker-app-bd1e1.firebasestorage.app",
    messagingSenderId: "106504984391",
    appId: "1:106504984391:web:49f092ff4c80596a841e62",
    databaseURL: "https://leads-tracker-app-bd1e1-default-rtdb.asia-southeast1.firebasedatabase.app"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

console.log(firebaseConfig)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
    
})