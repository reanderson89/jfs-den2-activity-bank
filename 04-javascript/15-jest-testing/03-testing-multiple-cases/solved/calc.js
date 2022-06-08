const sum = (a,b) => {
    return a + b;
  }
const difference = (a,b) => {
    return a - b;
  }
const oddOrEven = (num) => {
    if(num % 2 === 0){
        return `${num} is an even number`
    } else {
        return `${num} is an odd number`
    }
}
  
  
    module.exports = {sum, difference, oddOrEven}