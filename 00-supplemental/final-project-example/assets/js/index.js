// start by creating an instance of your class
const gearManager = new GearController();


let gearRows = document.getElementById("gearRows");
let addGearBtn = document.getElementById("addGearButton");

if(localStorage.getItem("gear")){
  gearManager.loadLocalStorage();
}



const renderListFromLocal = () => {
    // we want to loop through our array and display each item by adding it to our last
    gearManager.loadLocalStorage();
    let gear = gearManager.gearArray;
    console.log(gear);

    for (let i = 0; i < gear.length; i++){
  
      console.log(gear[i]);
      // row aren't displaying on the page. Clear local storage and give it a real image.
        let newRow = document.createElement("tr");
        newRow.setAttribute("data-id", gear[i].id);
        newRow.innerHTML = `
        <th scope="row">${gear[i].url}</th>
        <td>${gear[i].type}</td>
        <td>${gear[i].category}</td>
        <td>${gear[i].price}</td>`;
      gearRows.appendChild(newRow); 
    }
}




addGearBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    let gearURL = document.getElementById("gearURL");
    let gearType = document.getElementById("gearType");
    let gearPrice = document.getElementById("gearPrice");
    let gearCategory = document.getElementById("gearCategory");
    
    gearManager.addGear(gearURL.value, gearCategory.value, gearType.value, gearPrice.value);
    gearManager.setLocalStorage();
    renderListFromLocal();

    gearRows.innerHTML = '';

    gearPrice.value = "";
    gearCategory.value = "";
    gearType.value = "";
    gearURL.value = "";
    })





