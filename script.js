const endDate="19 March 2023 10:16 PM";


document.getElementById("end-date").innerText=endDate;
const timer=document.querySelectorAll("input");
const clock=()=>{
    const end= new Date(endDate);
    let now=new Date();
    console.log(end);
    console.log(now);
    const diff=end-now;
    if(diff<0){
        return;
    }
    timer[0].value=Math.floor((diff)/(60*60*24*1000));
    timer[1].value=Math.floor((diff/(60*60*1000))%24);
    timer[2].value=Math.floor((diff/(60*1000))%60);
    timer[3].value=Math.floor((diff/1000)%60);
  
}

clock();

const title=document.getElementsByClassName("title");
console.log(title);
const interval=setInterval(()=>{
    if(new Date(endDate)<=new Date()){
        console.log("stopped");
        stop();
    }
    else{
    clock();
    }
},1000);

const stop=()=>{
    clearInterval(interval);
    title[0].textContent="And we are here!!!";
    title[1].textContent="";
    // console.log("ok");
}


