
let boxes = document.querySelectorAll(".box");
let count = 0;
let value =0;
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("click");
       if(count==0){
         box.innerText = "X";
         count =1;
       }else{
         box.innerText = "0";
         count =0;
       }
       value++;
       box.disabled = true;
       winning();
   })
})
let winningpattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
function winning(){
    for(let pattern of winningpattern){
      let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText
      if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val==pos2val&&pos2val==pos3val){
          console.log("winner");
          display(pos1val);
          disable();
        }else{
          draw();
        }
      }
    }
    
}
function draw(){
  if(value==9){
    msg.innerText = "The Game is Draw";
   container.classList.remove("sajan");
  }
}
let container = document.querySelector("#container");
let msg = document.querySelector("#hemant");
function display(pos1val){
       msg.innerText = `Congratulation! the winner is ${pos1val}`;
       container.classList.remove("sajan");
}
function disable(){
  for(let box of boxes){
    box.disabled = true;
  }
}
function enable(){
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
let butn1 = document.querySelector("#new-btn");
let butn2 = document.querySelector("#old-btn");
butn1.addEventListener("click",()=>{
  enable();
  container.classlish.add("sajan");
})
butn2.addEventListener("click",()=>{
  enable();
  container.classlish.add("sajan");
})