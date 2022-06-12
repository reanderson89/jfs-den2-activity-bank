class GearController {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.gearArray = [];
    }

    addGear(url, category, type, price){
        let newGear = {
            url,
            category,
            type,
            price,
            id: this.currentID++
        }
        this.gearArray.push(newGear);
    }

    setLocalStorage(){
        localStorage.setItem("gear", JSON.stringify(this.gearArray));
        localStorage.setItem("currentID", JSON.stringify(this.currentID));
    }

    loadLocalStorage(){
        this.gearArray = JSON.parse(localStorage.getItem("gear"))
        this.currentID = JSON.parse(localStorage.getItem('currentID'))
     }
}