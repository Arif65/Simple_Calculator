const bts = document.querySelectorAll(".bt");
bts.forEach(cur => {
    cur.addEventListener("click", () => {        
    let b = cur.textContent;
    let a = document.getElementById("display").textContent;
    let c = `${a}${b}`;
    if(a=="Error" || a==0)c=`${b}`;
    console.log(c);
    document.getElementById("display").textContent=c;
    });
});

const ac = document.getElementById('bAC');
ac.addEventListener("click", () => {
    document.getElementById("display").textContent="0";
});

const del = document.getElementById('bDEL');
del.addEventListener("click", () => {
    let str = document.getElementById("display").textContent;
    let res = str.slice(0,-1);
    if(!res.length)res="0";
    document.getElementById("display").textContent=res;
});

const eq = document.getElementById('b=');
eq.addEventListener("click", () => {
    try{
        let res = eval(document.getElementById("display").textContent).toFixed(2);
        document.getElementById("display").textContent=res;
    }
    catch{
        document.getElementById("display").textContent="Error";
    }
  });