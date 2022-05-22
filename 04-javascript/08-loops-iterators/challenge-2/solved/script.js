let par72 = document.getElementById("pga");
let under100 = document.getElementById("new");
let oldTotal = document.getElementById("oldTotal");
let newTotal = document.getElementById("newTotal");

// [ holeNumber, par, difficulty ]
let lostTracks = [[1,4,11],[2,4,13],[3,4,9],[4,4,3],[5,3,15],[6,4,7],[7,5,5],[8,3,17],[9,5,1],[10,4,4],[11,3,18],[12,5,2],[13,4,12],[14,4,10],[15,4,14],[16,3,16],[17,4,8],[18,5,6]]

// accepts two arrays as parameters and renders them to the page. You do not need to change anything here (You can add code for the bonus though), but you will call the function and pass in the arguments to complete the challenge.
const renderPar = function(oldPar,newPar){
let displayOld = ``;
let displayNew = ``;

oldPar.forEach(hole => {
    displayOld += `<li>Hole Number: ${hole[0]} --- Par: ${hole[1]} --- Difficulty: ${hole[2]}</li>`
});

newPar.forEach(hole => {
    displayNew += `<li>Hole Number: ${hole[0]} --- Par: ${hole[1]} --- Difficulty: ${hole[2]}</li>`
});

par72.innerHTML = displayOld;
under100.innerHTML = displayNew;

// Add BONUS code here. Find a way to add all of the pars from each array together. Example the oldPar should equal 72 and the newPar should equal 99. Once you have a variable that contains the value of the pars added up store them in the marked places below.
let justOldPar = oldPar.map(hole => hole[1]);
let totalOldPar = justOldPar.reduce((a,b) => a+b);

let justNewPar = newPar.map(hole => hole[1]);
let totalNewPar = justNewPar.reduce((a,b) => a+b);


//  uncomment the 2 lines below and add your variables for the old total par and the new total par.
oldTotal.innerHTML = `The par for this course is ${totalOldPar}`;
newTotal.innerHTML = `The new par for this course is ${totalNewPar}`;

}

const generateNewPar = golfCourse => {
    let newPar = golfCourse.map(hole => {
        if(hole[2] <= 9){
            return [hole[0], hole[1] + 2, hole[2]];
        } else {
            return [hole[0], hole[1] + 1, hole[2]];
        }
    });

    return newPar;
}

renderPar(lostTracks, generateNewPar(lostTracks));



