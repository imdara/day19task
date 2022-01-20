document.getElementById("bdy").innerHTML =`
<h1 class="container" id="title">Pagination Task</h1>
<p class="container" id="description">Click on the page numbers below to see json data at the corresponding indices</p>
<div class="table-responsive">
<table class="table table-bordered">
<tr>
<th>Id</th>
<th>Name</th>
<th>Email</th>
</tr>
<tr>
<td id="resultid"></td>
<td id="resultname"></td>
<td id="resultemail"></td>
</tr>
<table></div><br>
<div id="buttons" class="d-flex justify-content-center">
<button id="first" class="btn btn-primary">First</button>
<button id="prev" class="btn btn-primary">Prev</button>
<button id="btn1" class="btn btn-primary">1</button>
<button id="btn2" class="btn btn-primary">2</button>
<button id="btn3" class="btn btn-primary">3</button>
<button id="btn4" class="btn btn-primary">4</button>
<button id="btn5" class="btn btn-primary">5</button>
<button id="next" onclick="next()" class="btn btn-primary">Next</button>
<button id="last" class="btn btn-primary">Last</button></div>`;

let currentPage;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

first.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
  btn1.innerHTML = 1;
  btn2.innerHTML = 2;
  btn3.innerHTML = 3;
  btn4.innerHTML = 4;
  btn5.innerHTML = 5;
  currentPage = Number(btn1.innerText);
  document.getElementById("resultid").innerHTML = data[currentPage-1].id;
  document.getElementById("resultname").innerHTML = data[currentPage-1].name;
  document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

prev.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    if (Number(btn1.innerText)>1){
    btn1.innerHTML=Number(btn1.innerHTML)-1;
  btn2.innerHTML=Number(btn2.innerHTML)-1;
  btn3.innerHTML=Number(btn3.innerHTML)-1;
  btn4.innerHTML=Number(btn4.innerHTML)-1;
  btn5.innerHTML=Number(btn5.innerHTML)-1;
    }
  currentPage = currentPage - 1;
  document.getElementById("resultid").innerHTML = data[currentPage-1].id;
  document.getElementById("resultname").innerHTML = data[currentPage-1].name;
  document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

btn1.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    .then((response) => response.json())
    .then((data)=> {
    currentPage = Number(btn1.innerText);
    document.getElementById("resultid").innerHTML = data[currentPage-1].id;
    document.getElementById("resultname").innerHTML = data[currentPage-1].name;
    document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
    });
});

btn2.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    currentPage = Number(btn2.innerText);
    document.getElementById("resultid").innerHTML = data[currentPage-1].id;
    document.getElementById("resultname").innerHTML = data[currentPage-1].name;
    document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

btn3.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    currentPage = Number(btn3.innerText);
    document.getElementById("resultid").innerHTML = data[currentPage-1].id;
    document.getElementById("resultname").innerHTML = data[currentPage-1].name;
    document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

btn4.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    currentPage = Number(btn4.innerText);
    document.getElementById("resultid").innerHTML = data[currentPage-1].id;
    document.getElementById("resultname").innerHTML = data[currentPage-1].name;
    document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

btn5.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    currentPage = Number(btn5.innerText);
    document.getElementById("resultid").innerHTML = data[currentPage-1].id;
    document.getElementById("resultname").innerHTML = data[currentPage-1].name;
    document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

next.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    if (Number(btn1.innerText)<=95){
    btn1.innerHTML=Number(btn1.innerHTML)+1;
  btn2.innerHTML=Number(btn2.innerHTML)+1;
  btn3.innerHTML=Number(btn3.innerHTML)+1;
  btn4.innerHTML=Number(btn4.innerHTML)+1;
  btn5.innerHTML=Number(btn5.innerHTML)+1;
    }
  currentPage = currentPage + 1;
  document.getElementById("resultid").innerHTML = data[currentPage-1].id;
  document.getElementById("resultname").innerHTML = data[currentPage-1].name;
  document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});

last.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
  btn1.innerHTML = 96;
  btn2.innerHTML = 97;
  btn3.innerHTML = 98;
  btn4.innerHTML = 99;
  btn5.innerHTML = 100;
  currentPage = Number(btn5.innerText);
  document.getElementById("resultid").innerHTML = data[currentPage-1].id;
  document.getElementById("resultname").innerHTML = data[currentPage-1].name;
  document.getElementById("resultemail").innerHTML = data[currentPage-1].email;
  });
});