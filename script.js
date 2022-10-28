const addBtn = document.getElementById('btn1');
const topBtn = document.getElementById('btn2');

const table = document.getElementById("tab");


const fname = document.getElementById("f_name");

const lname = document.getElementById("l_name");
const city = document.getElementById("city");
const country = document.getElementById("country");



addBtn.addEventListener('click', () => {
    let f_name = fname.value;
    let l_name = lname.value;
    let cityName = city.value;
    let countryName = country.value;

    let help = `
        <tr>
        <td></td>
        <td>${f_name}</td>
        <td>${l_name}</td>
        <td>${cityName}</td>
        <td>${countryName}</td>
        
        </tr>
    
    `

    table.innerHTML = table.innerHTML + help;

    // table.innerHTML+=help;


});

topBtn.addEventListener('click', () => {
    let f_name = fname.value;
    let l_name = lname.value;
    let cityName = city.value;
    let countryName = country.value;
    

    let NewRow = table.insertRow(1);
    let cell1=NewRow.insertCell(-1);
    let cell2 = NewRow.insertCell(-1);
    let cell3 = NewRow.insertCell(-1);
    let cell4 = NewRow.insertCell(-1);
    let cell5 = NewRow.insertCell(-1);


    
    
    cell1.innerHTML='';
    cell2.innerHTML = f_name;
     cell3.innerHTML = l_name;
     cell4.innerHTML=cityName;
     cell5.innerHTML=countryName;

    


});
