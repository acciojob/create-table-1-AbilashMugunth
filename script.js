let table = document.querySelector("#sampleTable");

function insert_Row() {
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerText = "New Cell1";
  td2.innerText = "New Cell2";

  let tr = document.createElement("tr");
  tr.append(td1, td2);

  table.insertAdjacentElement("afterbegin", tr);
}
