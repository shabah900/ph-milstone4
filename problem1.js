
function calculateTax(income, expenses) {
    if(income <=0 || expenses <=0){
    return "Invalid Input" ;
 } 
 let profit = income - expenses ;
    let TaxToPay = profit * .20 ;
    return TaxToPay;
   }
   
 

 function sendNotification(email) {
    if(email.includes('@')){

        let notification = email.split('@').join(' sent you an email from ');
        return notification ;
    }
    else   return "Invalid Email"  ;
   

    }
    

    

    function checkDigitsInName(name) {
        if(typeof name === 'string'){

          return /\d/.test(name);

        }
        else return "Invalid Input" ;
        }
        

        

        function calculateFinalScore(obj) {
        
        if(typeof obj === 'object'){
          if(obj.isFFamily ===true){
            FinalScore = obj.testScore + obj.schoolGrade + 10 ;
          }
          else {
             FinalScore = obj.testScore + obj.schoolGrade ;
          }
          if(FinalScore>=80) {
            FinalScore = true ;
          }
          else FinalScore = false ;
          return FinalScore ;  
        }
        else return "Invalid Input" ;
          
            }
            


function waitingTime(waitingTimes , serialNumber) {
      if(Array.isArray(waitingTimes) && !isNaN(serialNumber)) {
            let sumOfTime = 0;
            for(let i=0 ; i <waitingTimes.length;i++){
                sumOfTime = sumOfTime + waitingTimes[i];

            }
            let averageTime = Math.round(sumOfTime/waitingTimes.length);
            let TimeToWait = averageTime*(serialNumber-1-waitingTimes.length);
            return TimeToWait ;
      }
      else  return "Invalid Input" ;

}
   
   