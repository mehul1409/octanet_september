var box = document.getElementById("box");
var addbtn = document.querySelector(".addbtn");
const writetodo = document.getElementById("writetodo");

addbtn.addEventListener("click", function () {

    if (!writetodo.value) {
        alert("Please first give us your to do work");
    } else {
        Writetodo(writetodo.value);
        writetodo.value = "";
    }
})

writetodo.addEventListener("keypress", function (event) {

    if (event.key == "Enter") {
        Writetodo(writetodo.value);
        writetodo.value = "";
    }
})

function Writetodo(val) {

    let currenttime = new Date();
    let currday = currenttime.getDate();
    let currmonth = currenttime.getMonth();
    let curryear = currenttime.getFullYear();
    let currhours = currenttime.getHours();
    let currminutes = currenttime.getMinutes();
    let currseconds = currenttime.getSeconds();
    let ampm = "AM";
    if (currhours > 12) {
        ampm = "PM";
        if (currhours > 12) {
            currhours = currhours - 12;
        }
    }

    const todobox = document.createElement("div");
    todobox.classList.add("work");
    todobox.innerHTML = `
    <div class="write">${val}</div>
    <div class= "btntime">
    <div class="btn">
        <button class="editbtn">Edit</button>
        <button class="deletebtn" id="edit">Delete</button>
        <input type="checkbox" name="done" class="taskdone">
    </div>
    <div>
    <div class="time">${currday}/${currmonth}/${curryear}</div>
    <div class="time">${currhours}:${currminutes}:${currseconds} ${ampm}</div>
    </div>
    </div>
            `;

    todobox.querySelector(".deletebtn").addEventListener("click",
        function () {
            todobox.remove();
        })


    var edit = todobox.querySelector(".editbtn");
    edit.addEventListener("click", function () {
        const x = todobox.querySelector(".write").innerHTML;
        writetodo.value = x;
        todobox.remove();
    })
    var list = todobox.querySelector(".write");
    var taskdone = todobox.querySelector(".taskdone");
    taskdone.addEventListener("click", function () {
        list.classList.toggle("taskdone");
    })

    box.appendChild(todobox);
}

var flag = false;
const light = document.querySelector(".light");
const logo = document.querySelector(".logo");
const body = document.body;
light.addEventListener("click", function () {

    logo.classList.toggle("spancolor");
    body.classList.toggle("bodydark");
    addbtn.classList.toggle("addbtncolor");

    if (!flag) {
        light.innerHTML = "Light";
        flag = true;
    }
    else {
        light.innerHTML = "Dark";
        flag = false;
    }
})
