const ib=document.getElementById("input-box");
const lc=document.getElementById("listContainer");

function addTask(){
    if(ib.value===''){
        alert("write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        lc.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ib.value="";
    saveData();
}

lc.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else{
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();