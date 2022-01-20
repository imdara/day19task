function disp(n) {
    document.getElementById("result").value+=n;  
}

function check() {
    for (var i=0; i<document.getElementById('result').value.length; i++) {
    if (document.getElementById('result').value.charCodeAt(i)>47 && document.getElementById('result').value.charCodeAt(i)<58)
    alert('Please enter values between 0 and 9');
    }
}
function eq() {
    let final=document.getElementById("result").value;
    let res=eval(final);
    document.getElementById("result").value=res;
}

function backspace() {
    document.getElementById('result').value=document.getElementById('result').value.slice(0,document.getElementById('result').value.length-1);
}

document.body.addEventListener("keydown", keypress);
function keypress(e) {
    validate(e);
   
    
  }
  ////valication Check
  function validate(e) {
    console.log("Keys", e.key, typeof e.key);
    
    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "9" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "0" 
    ) {
        disp(e.key)
      
    } else {
      alert("Only Numbers allowed");
    }
    
  }