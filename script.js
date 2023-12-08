let table = document.querySelector("#sampleTable");
let count=0
function insert_Row() {
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerText = `New cell${++count}`;
  td2.innerText = `New cell${++count}`;

  let tr = document.createElement("tr");
  tr.append(td1, td2);

  table.insertAdjacentElement("afterbegin", tr);
}
