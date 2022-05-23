let displayPar72 = document.getElementById("pga");
let displayPar99 = document.getElementById("new");
let displayOldTotal = document.getElementById("oldTotal");
let displayNewTotal = document.getElementById("newTotal");

// Here is an example of hole number 1 and it's information [ holeNumber 1, par 4, difficulty 11 ] 
let par72 = [[1,4,11],[2,4,13],[3,4,9],[4,4,3],[5,3,15],[6,4,7],[7,5,5],[8,3,17],[9,5,1],[10,4,4],[11,3,18],[12,5,2],[13,4,12],[14,4,10],[15,4,14],[16,3,16],[17,4,8],[18,5,6]]

// accepts two arrays as parameters and renders them to the page. You do not need to change anything here (You can add code for the bonus though), but you will call the function and pass in the arguments to complete the challenge.
const renderPar = function(oldPar,newPar){
let oldParList = ``;
let newParList = ``;

oldPar.forEach(hole => {
    oldParList += `<li>Hole Number: ${hole[0]} --- Par: ${hole[1]} --- Difficulty: ${hole[2]}</li>`
});

newPar.forEach(hole => {
    newParList += `<li>Hole Number: ${hole[0]} --- Par: ${hole[1]} --- Difficulty: ${hole[2]}</li>`
});

displayPar72.innerHTML = oldParList;
displayPar99.innerHTML = newParList;

// Add BONUS code here. Find a way to add all of the pars from each array together. Example the oldPar should equal 72 and the newPar should equal 99. Once you have a variable that contains the value of the pars added up store them in the marked places below.



//  uncomment the 2 lines below and add your variables for the old total par and the new total par.
// displayOldTotal.innerHTML = `The par for this course is `;
// displayNewTotal.innerHTML = `The new par for this course is `;

}


// Write your code here



