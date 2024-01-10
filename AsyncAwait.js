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

async function callAsyncly(){
    try {
    await enroll()
    await progress()
    const certificateInfo=await getCertificate()
    console.log(certificateInfo);
    
    } catch (error) {
        console.log(error);
        
    }
    
}
callAsyncly()