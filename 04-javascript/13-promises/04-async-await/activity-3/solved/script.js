const store = {
    sunglasses: {
      inventory: 817, 
      cost: 9.99
    },
    pants: {
      inventory: 236, 
      cost: 7.99
    },
    bags: {
      inventory: 17, 
      cost: 12.99
    }
  };
  
  const checkInventory = (order) => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
     const itemsArr = order.items;  
     let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
     
     if (inStock){
       let total = 0;   
       itemsArr.forEach(item => {
         total += item[1] * store[item[0]].cost
       });
       console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
       resolve([order, total]);
     } else {
       reject(`The order could not be completed because some items are sold out.`);
     }     
  }, generateRandomDelay());
   });
  };
  
  const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
     let hasEnoughMoney = order.giftcardBalance >= total;
     // For simplicity we've omited a lot of functionality
     // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
     if (hasEnoughMoney) {
       console.log(`Payment processed with giftcard. Generating shipping label.`);
       let trackingNum = generateTrackingNumber();
       resolve([order, trackingNum]);
     } else {
       reject(`Cannot process order: giftcard balance was insufficient.`);
     }
     
  }, generateRandomDelay());
   });
  };
  
  
  const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
       resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
  }, generateRandomDelay());
   });
  };
  
  
  // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
  function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
  }
  
  // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
  function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
  }
  
  const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
  };
  
  // Refactor the code below:
  
  
    checkInventory(order)
    .then((resolvedValueArray) => {
      return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
      return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
      console.log(successMessage);
    })

async function doOrder(order) {
    try {
        const response = checkInvetory(order);
        
    } catch (err) {
        console.log(err);
    }
}







// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`);
//         if (location === 'Google') {
//             resolve('Google says hi');
//         } else {
//             reject('We can only talk to Google');
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('Processing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }


// async function doWork() {
//     try {
//         const response = await makeRequest('Facebook');
//         console.log('Response Received');
//         const processedResponse = await processRequest(response);
//         console.log(processedResponse);
//     } catch (err){
//         console.log(err);
//     }
// }

// doWork();