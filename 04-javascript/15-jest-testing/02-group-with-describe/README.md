# Group with describe

* In order to run a specific test file you will need to use the command `npm test -- testName.js`

* In jest we can group our tests using the "describe" keyword and function

```javascript
describe("This will describe the group of tests that will run", () => {
    // The tests will go in here

    // we can even have nested describes to further group our tests so they read more like a story.
    describe("This is a nested describe, and will show up indented from the first one when ran in the console", () => {
        // Tests relating to this group would go here
    })
})
```

* Refactor the code given in the calc2.test.js file so that the tests are grouped together inside of a describe. Run the tests to make sure they still work. Change their names so that it makes sense when you read them in the terminal.