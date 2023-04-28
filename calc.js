let flag_norm=1;
let flag_eq=0;

let flag;
let a1, a2, b1, b2, c1, c2;
let x, y;

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
    fa1=fb1=fc1=fa2=fb2=fc2=undefined;
});

const del = document.getElementById('bDEL');
del.addEventListener("click", () => {
    let str = document.getElementById("display").textContent;
    let res = str.slice(0,-1);
    if(!res.length)res="0";
    document.getElementById("display").textContent=res;
});

const mode_norm = document.getElementById('norm');
mode_norm.addEventListener("click", () =>{
    document.getElementById("display").textContent=0;
    document.getElementById("blank").textContent="";
    flag=undefined;
    flag_norm=1;
    flag_eq=0;
});

const mode_eq = document.getElementById('eqn');
mode_eq.addEventListener("click", () =>{
    document.getElementById("display").textContent=0;
    document.getElementById("blank").textContent="a1=?";
    flag=1;
    flag_norm=0;
    flag_eq=1;
});

function fn(a1,b1,c1,a2,b2,c2){
    let d = a1*b2-a2*b1;
    if(!d){
        x = y = undefined;
    }
    else{
        y = (a1*c2-a2*c1)/d;
        if(a1)
            x = (c1-b1*y)/a1;
        else
            x = (c2-b2*y)/a2;
    }
}

const eq = document.getElementById('b=');
eq.addEventListener("click", () => {
    let output;
    try{
        let res = eval(document.getElementById("display").textContent).toFixed(2);
        output=res;
    }
    catch{
        output="Error";
    }
    if(flag_norm){
        document.getElementById("display").textContent=output;
    }
    else{
        if(flag==0)
        {
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="a1=?";
            flag=1;
        }
        else if(flag==1)
        {
            a1=output;
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="b1=?";
            flag=2;
        }
        else if(flag==2)
        {
            b1=output;
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="c1=?";
            flag=3;
        }
        else if(flag==3)
        {
            c1=output;
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="a2=?";
            flag=4;
        }
        else if(flag==4)
        {
            a2=output;
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="b2=?";
            flag=5;
        }
        else if(flag==5)
        {
            b2=output;
            document.getElementById("display").textContent=0;
            document.getElementById("blank").textContent="c2=?";
            flag=6;
        }
        else if(flag==6)
        {
            c2=output;
            fn(a1,b1,c1,a2,b2,c2);
            console.log(a1,b1,c1,a2,b2,c2);
            if(x==undefined)x="Undefined";
            document.getElementById("display").textContent=x.toFixed(2);
            document.getElementById("blank").textContent="x=?";
            flag=7;
        }
        else if(flag==7)
        {
            if(y==undefined)y="Undefined";
            document.getElementById("display").textContent=y.toFixed(2);
            document.getElementById("blank").textContent="y=?";
            flag=0;
        }
    }
});