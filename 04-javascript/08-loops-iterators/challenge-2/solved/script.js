let displayPar72 = document.getElementById("pga");
let displayPar99 = document.getElementById("new");
let displayOldTotal = document.getElementById("oldTotal");
let displayNewTotal = document.getElementById("newTotal");

// [ holeNumber, par, difficulty ]
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
let justOldPar = oldPar.map(hole => hole[1]);
let totalOldPar = justOldPar.reduce((a,b) => a+b);

let justNewPar = newPar.map(hole => hole[1]);
let totalNewPar = justNewPar.reduce((a,b) => a+b);


//  uncomment the 2 lines below and add your variables for the old total par and the new total par.
displayOldTotal.innerHTML = `The par for this course is ${totalOldPar}`;
displayNewTotal.innerHTML = `The new par for this course is ${totalNewPar}`;

}

const generateNewPar = oldPar => {

    // let par99 = [];
    // for (let i = 0; i < oldPar.length; i++){
    //     if(oldPar[i][2] <= 9 && oldPar[i][2] >= 1){
    //         let holeInfo = [oldPar[i][0], oldPar[i][1] + 2, oldPar[i][2]]
    //         par99.push(holeInfo);
    //     } else if(oldPar[i][2] >= 10 && oldPar[i][2] <=18){
    //         let holeInfo = [oldPar[i][0], oldPar[i][1] + 1, oldPar[i][2]]
    //         par99.push(holeInfo);

    //     }
    // }



     let par99 = oldPar.map(currentHoleArr => {
        if (currentHoleArr[2] >= 1 && currentHoleArr[2] <=9){
                let adjustedHole = [currentHoleArr[0], currentHoleArr[1] + 2, currentHoleArr[2]];
                return adjustedHole;
            } else if (currentHoleArr[2] >= 10 && currentHoleArr[2] <= 18){
                let adjustedHole = [currentHoleArr[0], currentHoleArr[1] + 1, currentHoleArr[2]];
                return adjustedHole;
            }
    })


    // let par99 = oldPar.map(hole => (hole[2] >= 1 && hole[2] <= 9) ? [hole[0], hole[1] + 2, hole[2]] : [hole[0], hole[1] + 1, hole[2]]);

    return par99;
}

renderPar(par72, generateNewPar(par72));



