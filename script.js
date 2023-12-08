let table = document.querySelector("#sampleTable");
function insert_Row() {
 var table = document.getElementById("sampleTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
