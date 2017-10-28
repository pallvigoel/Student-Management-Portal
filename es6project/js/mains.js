
                            
var student=[];
function myFunction() {


    var name=document.getElementById("name").value;
    var rollno=document.getElementById("rollno").value;

    var passoutyear= document.getElementById("passoutyear").value;
    var stream=document.getElementById("stream").value

/*
if (!(!isNaN(name)&&isNaN(rollno)&&isNaN(passoutyear)&&(!isNaN(stream)))) {
alert("Wrong Value Entered"); 

}
*/

    var table = document.getElementById("myTable");
    var row = table.insertRow();
      var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

          
    var element1 = document.createElement("input");
            element1.type = "checkbox";
            element1.name="chkbox[]";
            cell0.appendChild(element1);


   // cell0.innerHTML='<input type="" name="value" id="d">';
   //cell0.innerHTML='<button onclick="del()"></button>';
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("rollno").value;


    cell3.innerHTML = document.getElementById("passoutyear").value;
    cell4.innerHTML = document.getElementById("stream").value;


    var obj={name:name,rollno:rollno,passoutyear:passoutyear,stream:stream};
    student.push(obj);

}




function addRow(tableID) {

            var table = document.getElementById(tableID);

            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);

            var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "checkbox";
            element1.name="chkbox[]";
            cell1.appendChild(element1);

            var cell2 = row.insertCell(1);
            cell2.innerHTML = rowCount + 1;

            var cell3 = row.insertCell(2);
            var element2 = document.createElement("input");
            element2.type = "text";
            element2.name = "txtbox[]";
            cell3.appendChild(element2);


        }

function deleteRow() {
var table = document.getElementById("myTable");
var rowCount = table.rows.length;

for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    if(rowCount <= 1) {
                        alert("Cannot delete all the rows.");
                        break;
                    }
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
        }

