let table=document.querySelector(".table");
console.log(table);
console.dir(table.childNodes);
let tbody=document.querySelector("tbody");


let td=document.querySelectorAll("td");
let tr=document.querySelectorAll("tr");
console.log(tr);
let sc=document.querySelectorAll(".sc");
console.log(sc);
let tj=document.querySelector(".tj");
console.log(tj);
// 删除
sc.forEach((element,index)=>{
    element.onclick=function () {
        table.childNodes[1].removeChild(tr[index]);
        //    一定要记住找到table
    }
})
// 删除
//事件委托替换元素遍历
table.ondblclick=function (event) {
    console.log(event.target);
    if(event.target.className="td"){
        let input =document.createElement("input");
        console.log(input);
        input.value=event.target.innerText;
        event.target.innerText="";
        input.onblur=function(){
            value=this.value;
            event.target.innerText=value;
    }

        event.target.appendChild(input);
        input.focus();

}


}
sc.onclick=function (event) {
    if(event.target.innerText=="删除"){
        let father1=td.parentNode;
        father1.parentNode.removeChild(father1);
    }
    }
tj.onclick=function () {
    let son=document.createElement("tr");
    tbody.appendChild(son);
    let son1=document.createElement("td");
    son1.innerText=1;
    son.appendChild(son1);
    let son2=document.createElement("td");
    son2.innerText=2;
    son.appendChild(son2);
    let son3=document.createElement("td");
    son3.innerText=3;
    son.appendChild(son3);
    let son4=document.createElement("td");
    son4.innerText=4;
    son.appendChild(son4);
    let son5=document.createElement("td");
    son5.innerText=5;
    son.appendChild(son5);
    let son6=document.createElement("td");
    son6.innerText=6;
    son.appendChild(son6);
    let son7=document.createElement("td");
    son7.innerText=7;
    son.appendChild(son7);
    let son8=document.createElement("td");
    son8.innerText=8;
    son.appendChild(son8);
    let son9=document.createElement("td");
    son9.innerText=9;
    son.appendChild(son9);
    let son10=document.createElement("td");
    son10.innerHTML="<button>删除</button> ";
    son.appendChild(son10);
    son10.onclick=function (event) {
      if(event.target.innerText=="删除"){
          let father=son10.parentNode;
          father.parentNode.removeChild(father);
      }
}
}

//事件委托替换元素遍历