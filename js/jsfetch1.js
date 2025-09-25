
// const pr=fetch(url);
//       pr.then((res)=>{
//         return res.json();
//       })
//       .then((data)=>{
//         data.users.forEach((da)=>{
//         console.log("name=",da.firstName);
//         console.log("email=",da.email);
//         console.log("ip=",da.ip);
//         console.log("Mac Address=",da.macAddress);
//       })
//     })
//       .catch((err)=>{
//         console.error("Error:",err.message)
//       })

const f1=async()=>{
   const res=await fetch(url);
   const jsandata=await res.json();
   jsondata.users.forEach((data)=>{
    console.log("Name=",data.firstName);
    console.log("Email=",data.email);
    console.log("Ip=",data.ip);
    console.log("Mac Address=",data.macAddress);
    console.log("#############")
   })
}
catch(err){
        console.log("Error",err.message);
    }

f1();