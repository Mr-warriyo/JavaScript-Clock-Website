const Timep = document.getElementById('CurentTimeDisplay')

/**
a Function which updates the Time every milliseconds
**/
function updateTheTime(){
      
    var date = new Date(); 
    var hours = date.getHours(); 
    var minutes = date.getMinutes(); 
    var seconds = date.getSeconds();
    var MilliSeconds = date.getMilliseconds();
    var newformat = hours >= 12 ? 'PM' : 'AM';  
    var Dat = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[date.getMonth()]
    var year = date.getFullYear();
    var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const day = dayNames[date.getDay()];
    
    hours = hours % 12;  
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    


    Timep.innerHTML = `Current Time is: ${hours} : ${minutes} : ${seconds} : ${MilliSeconds} ${newformat} on ${Dat} of ${month}, ${year} (${day})`; 

} 
setInterval(updateTheTime, 1);
