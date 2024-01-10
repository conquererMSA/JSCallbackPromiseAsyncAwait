// Basic callback function

// function display(result){
//     const display=document.getElementById('value')
//     display.innerText=`value is: ${result}`
// }

// function calculate(num1, num2){
// const sum= num1+num2 
// display(sum)

// }
// calculate(2,4)

// function calculate(num1,num2, callback){
//     const result=num1+num2 
//     if(callback) callback(result)
//     return result
// }

// function display(result){
//     console.log(result);
    
// }

// const result=calculate(2,4)
// console.log(result);

// const calculate=(num1,num2,display)=>{
//     const sum=num1+num2 
//     if(display)display(sum)
// }
// // const display=(value)=>{
// //     console.log(value);
// //     }
// calculate(2,5,(value)=>{
//     console.log(value);
//     })

// const calculate=(num1,num2, callback)=>{
//     if(callback)callback('its will call later') //wrong
//     const sum=num1+num2 
//     console.log('its call first',sum);
//     }
// calculate(5,5,(strValue)=>{
//     console.log(strValue);
// })




// eta synchronous code ebong while loop er jonno browser 3 sec block hoye thake.
// browser block hoye takhar jonno user kuno dhoroner interactivity korte pare na.
// const processOrder=(coustomer)=>{
//     console.log('Processing order for coustomer 1');
//     var currentTime=new Date().getTime()
//     while (currentTime + 3000 >= new Date().getTime())
//     console.log('Order processed for coustomer 1');
// }
// console.log('Take order for coustomer 1');
// processOrder('Coustomer 1')
// console.log('Completed order for coustomer 1');

// eta asynchronous code, ekhane kuno blocking behavior thake na
// const processOrder=(coustomer)=>{
//         console.log('Processing order for coustomer 1');

//         setTimeout(()=>{
//             console.log('cooking completed');
//             },3000)

//        console.log('Order processed for coustomer 1');
//      }

// console.log('Take order for coustomer 1');
// processOrder('Coustomer 1')
//  console.log('Completed order for coustomer 1');

//  cntrolled code exicution flow by callback function
// const takeOrder=(coustomer, callback)=>{
// console.log(`Take order for ${coustomer}`)
// callback(coustomer)
// }

// const processingOrder=(coustomer,callback)=>{
// console.log(`Processing order for ${coustomer}`)
// setTimeout(()=>{
// console.log('Cooking completed!');
// callback(coustomer)
// },3000)
// }

// const orderStatus=(coustomer)=>{
// console.log(`Order completed for ${coustomer}`);
// }

// takeOrder('MSA',(coustomer)=>{
//     processingOrder(coustomer,(coustomer)=>{
//     orderStatus(coustomer)
//     })
// })
// console.log('Hello');


// takeOrder('MSA',processingOrder('MSA',orderStatus('MSA')))

// three callback function about course progress 

const payment=true
const marks=80

function enroll(callback){
    console.log('Payment is loading...');
    setTimeout(function(){
      if(payment){
        //ekhane porer kaj/ function call kora hobe
        //ei callback muloto progress function, zeti para hisabe getCertificate function ke cay
         callback()
      }
      else{
        console.log('Payment failed!');
        }
    },2000)
}

function progress(callback){
    console.log('Course on progress...');
    setTimeout(function(){
      if(marks>=80){
        console.log('You are obtain letter marks. Preparing your certificate')
        //ei callback muloto getCertificate function, zeti para recieve kore na
        callback()
        }
        else{
            console.log('You could not pass');
            }
    },4000)
    
}

function getCertificate(){
    setTimeout(function(){
        console.log('Congrats! You got the certificate');
    },2000)
    
}
//dont write like this
// enroll()
// progress()
// getCertificate()

//dont write like this
// enroll(progress(getCertificate))

enroll(function(){
    progress(getCertificate)
})
/*
Callback.js:113 Payment is loading...
Callback.js:127 Course on progress...
Callback.js:130 You are obtain letter marks. Preparing your certificate
Callback.js:143 Congrats! You got the certificate
*/

