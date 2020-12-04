

//js code for digital watch
setInterval(showTime, 1000); 
function showTime() { 
            let time = new Date(); 
            let hour = time.getHours(); 
            let min = time.getMinutes(); 
            let sec = time.getSeconds(); 
            am_pm = "AM"; 
  
            if (hour > 12) { 
                hour -= 12; 
                am_pm = "PM"; 
            } 
            if (hour == 0) { 
                hr = 12; 
                am_pm = "AM"; 
            } 
  
            hour = hour < 10 ? "0" + hour : hour; 
            min = min < 10 ? "0" + min : min; 
            sec = sec < 10 ? "0" + sec : sec; 
  
            let currentTime = hour + ":"  
                + min + ":" + sec + am_pm; 
  
            document.getElementById("clock") 
                .innerHTML = currentTime; 
        } 
  
         
//js code for circumference of circle

setInterval(calcCircumfrence, 1000); 
 
function calcCircumfrence(){
    let radius = 10;
    let pi = 3.14;
    let circumFerence = 2 * pi * radius;

    document.getElementById("circle").innerHTML = circumFerence.toFixed(3);

}


////js code for place

setInterval(array, 1000); 
function array(){
 let place = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
 let place2 = ["Kathmandu","Pokhara"]
 place = place.filter(item => place2.indexOf(item) === -1);
document.getElementById("place").innerHTML= place.length;
 

}
//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  

  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}


//click to call function
document.getElementById("calculate").onclick = calculateTip();


////js code for calculator

function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
           
         function clean() 
         { 
             document.getElementById("result").value = "" 
         } 







