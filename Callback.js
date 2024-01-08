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
const processOrder=(coustomer)=>{
        console.log('Processing order for coustomer 1');

        setTimeout(()=>{
            console.log('cooking completed');
            },3000)

       console.log('Order processed for coustomer 1');
     }
     
console.log('Take order for coustomer 1');
processOrder('Coustomer 1')
 console.log('Completed order for coustomer 1');



