# First Test

* In order to run a specific test file you will need to use the command `npm test -- testName.js`

## Getting Started

* You will have to first install jest using this command `npm i --save-dev jest` (the "i" is short for install, and we are going to save it as a dev dependency).

* You will also need to add a "script" to your package.json so that you can run the tests in the command line easier. 
```json
"scripts": {
    "test": "jest"
  }
```
* The script property should be added to the package.json so that it looks like this:

```json
{
  "devDependencies": {
    "jest": "^28.1.1"
  },
  "scripts": {
    "test": "jest"
  }
}
```

* For this activity your goal is to create 2 tests. 
    - One test that should check that the sum function is working properly. 
    - The other should test if the difference function is working properly.

    ```javascript
    test("should do something", () => {

    })
    ```