## Breaking 100

- In this coding challenge you are tasked to create a program that accepts an array of 18 holes from a golf course that has a par of 72. Using the "par72" array, build a new array that has a par of 99. The changes made to the par will depend on the difficulty of the hole. Holes with a 1-9 difficulty will get **2 added to their par**, and holes with 10-18 difficulty will get **1 added to their par**.

- The array given has 18 nested arrays inside of it, one for each hole of the course. The order of the items in the array are as follows `[ hole number, par, difficulty ]`. Most golf courses have a par of 72, which is incredibly difficult to achieve for casual and amateur golfers. So we are going to use a system created by "The Golf Sidekick" to help golfers who are wanting to get better and have a fun. By helping them understand how they should actually be scoring based off of their skill level, they should see overall improvement.

- If you would like to watch the video again go [here](https://www.youtube.com/watch?v=bzsBsWNmhG4). Stop around the 4:15 mark.

## Requirements

* You will need to use some sort of loop or iterator method. You can start by using a for loop if you would like, but then see if you can refactor it after using the `.map()` method.

* You must pass 2 arguments to the `renderPar()` function to get your items to display and complete the challenge. There should be no missing information from the arrays. The new array that has a total par of 99 will hold the same information as the original except that the `par` for each hole will change depending on the difficulty. The `hole number` and `difficulty` value will remain the same though.

* To adjust the `par` for each hole you will need to **add 2** to every hole with a `difficulty` rating between and including 1-9, and **add 1** to every hole with a `difficulty` rating between and including 10-18.

## Bonus

* Inside of the `renderPar()` function their is a comment that says "Add bonus code here". Under this comment you will find a way to add all of the `par` numbers from each hole of the arrays. Then set your variables that you created to hold those numbers on the lines below to have them display to the page (read the comments in the bonus section).