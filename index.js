let a=document.querySelector("#hour");
let b=document.querySelector("#minute");
let c=document.querySelector("#second");

setInterval(()=>
{
    let aa=new Date();
    a.innerText=(aa.getHours()<10?"0":"")+aa.getHours();
}
,1000)

setInterval(()=>
    {
        let aa=new Date();
        b.innerText=(aa.getMinutes()<10?"0":"")+aa.getMinutes();
    }
    ,1000)

setInterval(()=>
        {
            let aa=new Date();
            c.innerText=(aa.getSeconds()<10?"0":"")+aa.getSeconds();
        }
,1000)