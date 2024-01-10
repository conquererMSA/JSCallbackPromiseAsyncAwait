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

const calculate=(num1,num2, callback)=>{
    if(callback)callback('its will call later') //wrong
    const sum=num1+num2 
    console.log('its call first',sum);
    }
calculate(5,5,(strValue)=>{
    console.log(strValue);
})




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



