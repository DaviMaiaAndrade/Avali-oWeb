function addMessage() {

    
    let name = document.getElementById('name').value.bold();
    let message = document.getElementById('message').value;
    let table = document.getElementById("response");

    let tableSize = table.rows.length; 
    let row = table.insertRow(tableSize); 
    let cell1 = row.insertCell(0); 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    row.id = tableSize; 

   
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    
    cell2.innerHTML =  name + ': ';
    cell3.innerHTML = message;
    cell4.innerHTML = btnCode;

    
    document.getElementById('name').value = "";
    document.getElementById('message').value = "";


    
    return false;
}


function removeToTable(id){

    let row = id.parentNode.parentNode.id; 
    row = document.getElementById(row); 
    console.log(row)
    row.parentNode.removeChild(row);

    
    return false;
}

function newpop(){
    neWindow = window.open ('', 'pagina', "width=250 height=250" );
    neWindow.document.write("Engenharia de Software </br> Davi Maia Andrade da Silva </br>");
}