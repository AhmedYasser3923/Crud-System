var x = null

function onFormSubmit(){
if (Validate()){
var formData = readFormData();
if (x==null)
insertNewRecord(formData);
else
UpdateRecord(formData);
resetForm();

}

}

function readFormData(){
var formData = {};
formData["Name"]=document.getElementById("Name").value;
formData["Email"]=document.getElementById("Email").value;
formData["phone"]=document.getElementById("phone").value;
formData["Salary"]=document.getElementById("Salary").value;
formData["City"]=document.getElementById("City").value;
return formData;

}

function insertNewRecord(data){
var table = document.getElementById("t0").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.Name;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.Email;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.phone;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.Salary;
cell5 = newRow.insertCell(4);
cell5.innerHTML = data.City;
cell6 = newRow.insertCell(5);
cell6.innerHTML = data.Actions;
cell6.innerHTML = `<a onClick="onEdit(this)"><button class="b7" onClick="onEdit(this)">
<i class="fa-solid fa-pen-to-square"></i>
</button></a>
<a onClick="onDelete(this)">
<button class="b6" >
<i class="fa-solid fa-trash"></i>
</button></a>
`


}

function resetForm() {
document.getElementById("Name").value = "";
document.getElementById("Email").value = "";
document.getElementById("phone").value = "";
document.getElementById("Salary").value = "";
document.getElementById("City").value = "";
x = null ;

}

function onEdit(td){
x = td.parentElement.parentElement;
document.getElementById("Name").value = x.cells[0].innerHTML;
document.getElementById("Email").value = x.cells[1].innerHTML;
document.getElementById("phone").value = x.cells[2].innerHTML;
document.getElementById("Salary").value = x.cells[3].innerHTML;
document.getElementById("City").value = x.cells[4].innerHTML;


}

function UpdateRecord(formData) {
x.cells[0].innerHTML = formData.Name;
x.cells[1].innerHTML = formData.Email;
x.cells[2].innerHTML = formData.phone;
x.cells[3].innerHTML = formData.Salary;
x.cells[4].innerHTML = formData.City;

}

function onDelete(td) {
if (confirm('Are you sure to delete this record?')){
row = td.parentElement.parentElement;
document.getElementById("t0").deleteRow(row.rowIndex);
resetForm();

}

}

function Validate() {
isValid = true ; 
if (document.getElementById("Name").value == ""){
isValid = false;
document.getElementById("NameValidationError").classList.remove("hide");
}
else {
isValid = true;
if (!document.getElementById("NameValidationError").classList.contains("hide"));
document.getElementById("NameValidationError").classList.add("hide");


} 
return isValid;


}