total=0;
 product=[];
 product[0]={company:"samsung",model:"galaxy",memory:64,price:15000};
 product[1]={company:"nokia",model:"S730",memory:128,price:22000};
 product[2]={company:"xiaomi",model:"note",memory:32,price:12000};
 product[3]={company:"motorola",model:"G10",memory:32,price:15000};
 product[4]={company:"apple",model:"S12",memory:64,price:25000};
 
 product[0].quantity=20;
 product[1].quantity=20;
 product[2].quantity=20;
 product[3].quantity=20;
 product[4].quantity=20;
function addingquan(){
  var set = document.getElementById("cm").value;
  var quantit = document.getElementById("num").value;
  if(set=="samsung galaxy"){
    total = total + quantit * product[0].price; 
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[0].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[0].price;
  }
  else if(set=="nokia S730"){
    total = total + quantit * product[1].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[1].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[1].price;
  }
  else if(set=="xiaomi note"){
    total = total + quantit*product[2].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[2].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[2].price;
  }
 
  else if(set=="motorola g10"){
    total = total + quantit * product[3].price;
    var row = addTable.insertRow(addTable.rows.length - 1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[3].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[3].price;
  }
  else if(set=="apple S12"){
    total = total + quantit * product[4].price;
    var row = addTable.insertRow(addTable.rows.length -1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = product[4].company;
 
    var cell2 = row.insertCell(1);
    cell2.innerHTML = quantit;
 
    var cell3 = row.insertCell(2);
    cell3.innerHTML = quantit * product[4].price;
  }
}


function billingquan(){
  var row = billTable.insertRow(billTable.rows.length - 1);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = "Total";
  cell1.width="150px";
 
  var cell2 = row.insertCell(1);
  cell2.innerHTML = total;
 }

