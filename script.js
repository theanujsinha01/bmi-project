
function convert(){
    var c = document.getElementById('data').value;
    var d = c/100;
   
   
    var k = document.getElementById('data3').value;

    var bmi = k/(d*d);
    var bmi2 = Math.floor(bmi);
    

    
   
               
               
     document.getElementById('result').innerText = bmi2;

     if (bmi>25) {
        document.getElementById('state').innerHTML = 'You are over weight';
        document.getElementById('state').style.color = "orange";

        
     } else if (bmi<18) {

        
     

    
        document.getElementById('state').innerHTML = 'You are under weight';
        document.getElementById('state').style.color = "red";
;
        
     } else {
        document.getElementById('state').innerHTML = 'Your BMI is Normal';
        document.getElementById('state').style.color = "green";

     }
     
     


     
}


 


