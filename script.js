var selectedRow=null
function onformsubmit(){
var formData=readFormData()
if(selectedRow===null)
insertNewRecord(formData)
else
updateRecord(formData);
resetForm()
} 

function readFormData(){
    var formData={}
    formData["fullName"]=document.getElementById("fullname").value
    formData["empcode"]=document.getElementById("empcode").value
    formData["salary"]=document.getElementById("salary").value
    formData["city"]=document.getElementById("city").value
    return formData;
}

function insertNewRecord(data){
    var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0]
    var newRow=table.insertRow(table.length)
    cell1=newRow.insertCell(0)
    cell1.innerHTML=data.fullName
    cell2=newRow.insertCell(1)
    cell2.innerHTML=data.empcode
    cell3=newRow.insertCell(2)
    cell3.innerHTML=data.salary
    cell4=newRow.insertCell(3)
    cell4.innerHTML=data.city
    cell5=newRow.insertCell(4)
cell5.innerHTML = `
  <a href="#" onclick="onEdit(this)">Edit</a> |
  <a href="#" onclick="onDelete(this)">Delete</a>
`;
}

function resetForm(){
    document.getElementById("fullname").value=""
    document.getElementById("empcode").value=""
    document.getElementById("salary").value=""
    document.getElementById("city").value=""
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName
    selectedRow.cells[1].innerHTML=formData.empcode
    selectedRow.cells[2].innerHTML=formData.salary
    selectedRow.cells[3].innerHTML=formData.city
}

function onDelete(td) {
    if (!confirm("Are you sure?")) return;

    const row = td.closest("tr");
    row.remove();
}
