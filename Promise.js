// Promise kuno ekta condition er upor kaj kore. condition fulfill hole promise resolved hoy and condition fail hole promise rejected hoy.
// Promise asynchronously exicute hoy
// Promise  diye kuno ekta code block er exicution tamiye deya zay.

// const hasMeeting=false
// const meeting=new Promise((resolved,rejected)=>{
// if(!hasMeeting){
//     const meeting={
//     name:'Technical Meeting',
//     location:'Zoom',
//     time:'10AM'
//     }
//     resolved(meeting)
// }else{
//     rejected(new Error('Meeting has been scheduled!'))
// }
// })

// const addToCalender=(meetingDetails)=>{
// const details=`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
// return Promise.resolve(details)
// }
// const proValue=addToCalender({
//     name:'Technical Meeting',
//     location:'Zoom',
//     time:'10AM'
//     })
// console.log('proValue',proValue);
    
// ekhane uporer meeting promise zeta resolve korbe seti addToCalender function recieve korbe ebong addToCalender function ze promise resolve korbe seti 2nd then block e recieve korbo.
// meeting.then(addToCalender).then((res)=>{
// console.log(res)

// }).catch((error)=>{
// console.log(error.message);
// })

// multiple promise 
// const promise1=Promise.resolve('Promise 1 resolved')
// const promise2=new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//      resolved('Promise 2 resolved')
//     },3000)
// })

// Promise.all([promise1,promise2]).then(res=>console.log(res))
// Promise.race([promise1,promise2]).then(res=>console.log(res))

const payment=true
const marks=80

function enroll(){
    console.log('Enrollment in progress..');
    
    const promise=new Promise((resolved, reject)=>{
         setTimeout(()=>{
        if(payment){
            console.log('Payment successfull');
            resolved()
        }
        else{
            reject('Payment failed...')
        }
        },2000)
    })
    return promise
}

function progress(){
    console.log('Course on progress....');
    const promise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
      if(marks>=80){
        resolve()
      }else{
        reject('Fail')
      }
        },2000)
        
    })

    return promise
}

function getCertificate(){
    console.log('Preparing your certificate...');
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Congratz! You got the certificate');
         },3000)
    })
    return promise
    
}

//promise block

enroll()
//enroll promise kichu resolved korle prothom then block e pabo
    // .then((res)=>{
    //     console.log(res);
        
    // })
    .then(progress)
    .then(getCertificate)
    .then((res)=>{
        console.log(res);
       })
    .catch((err)=>{
        console.log(err);
     })
