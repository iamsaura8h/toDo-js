const ib=document.getElementById("input-box");
const lc=document.getElementById("list-container");

function addTask(){
    if(ib.value===''){
        alert("write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        lc.appendChild(li);
    }
    ib.value="";
}