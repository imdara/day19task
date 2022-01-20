document.getElementById("bdy").innerHTML =`
<h1 class="container" id="title">Pagination Task</h1>
<p class="container" id="description">Click on the page numbers below to see json data at the corresponding indices</p>
<div class="table-responsive">
<table id="table" class="table table-bordered">
<thead>
<th>Id</th>
<th>Name</th>
<th>Email</th>
</thead>
<tbody id="tableBody">
</tbody>
<table></div><br>
<div id="buttons" class="d-flex justify-content-center">
<button id="first" class="btn btn-primary">First</button>
<button id="prev" class="btn btn-primary">Prev</button>
<button id="btn1" class="btn btn-primary">1</button>
<button id="btn2" class="btn btn-primary">2</button>
<button id="btn3" class="btn btn-primary">3</button>
<button id="btn4" class="btn btn-primary">4</button>
<button id="btn5" class="btn btn-primary">5</button>
<button id="next" class="btn btn-primary">Next</button>
<button id="last" class="btn btn-primary">Last</button></div>`;

let currentPage;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

let tbody = document.getElementById("tableBody");

first.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
  let tablerow="";
  btn1.innerHTML = 1;
  btn2.innerHTML = 2;
  btn3.innerHTML = 3;
  btn4.innerHTML = 4;
  btn5.innerHTML = 5;
  currentPage = Number(btn1.innerText);
  let c=(currentPage-1)*10+1;
  for (let i=c-1; i<10; i++) {
    tablerow+=`
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    </tr>
    `;
    tbody.innerHTML=tablerow;
  }
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
  let tablerow="";
  currentPage = currentPage - 1;
  let c=(currentPage-1)*10+1;
  for (let i=c-1; i<c+9; i++) {
    tablerow+=`
    <tr>
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    </tr>
    `;
    tbody.innerHTML=tablerow;
  }
  });
});

btn1.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    .then((response) => response.json())
    .then((data)=> {
      let tablerow="";
      currentPage = Number(btn1.innerText);      
      let c=(currentPage-1)*10+1;
    for (let i=c-1; i<10; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

btn2.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    let tablerow="";
    currentPage = Number(btn2.innerText);
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

btn3.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    let tablerow="";
    currentPage = Number(btn3.innerText);
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

btn4.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    let tablerow="";
    currentPage = Number(btn4.innerText);
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

btn5.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    let tablerow="";
    currentPage = Number(btn5.innerText);
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

next.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
    if (Number(btn1.innerText)<=5){
  btn1.innerHTML=Number(btn1.innerHTML)+1;
  btn2.innerHTML=Number(btn2.innerHTML)+1;
  btn3.innerHTML=Number(btn3.innerHTML)+1;
  btn4.innerHTML=Number(btn4.innerHTML)+1;
  btn5.innerHTML=Number(btn5.innerHTML)+1;
    }
  let tablerow="";
    currentPage = currentPage + 1;
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});

last.addEventListener("click", function() {
  fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
  .then((response) => response.json())
  .then((data)=> {
  btn1.innerHTML = 6;
  btn2.innerHTML = 7;
  btn3.innerHTML = 8;
  btn4.innerHTML = 9;
  btn5.innerHTML = 10;
  let tablerow="";
    currentPage = Number(btn5.innerText);
    let c=(currentPage-1)*10+1;
    for (let i=c-1; i<c+9; i++) {
      tablerow+=`
      <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      </tr>
      `;
      tbody.innerHTML=tablerow;
    }
  });
});
