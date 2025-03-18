function calculateTotalSpentByCategory(transactions) {
  let categoryMap = []; // Object to store total spent per category
  for(let i=0; i<transactions.length;i++){
      let category = transactions[i].category;
      let price = transactions[i].price;
      let found = false
      
      for(let j=0; j<categoryMap.length;j++){
          if(categoryMap[j].category == category){
              categoryMap[j].totalSpending +=price;
              found = true;
          }
      }
      
      if(!found){
          categoryMap.push({category:category, totalSpending:price})
      }
  }
  console.log(categoryMap)
}

// Test Data
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 100, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 220, category: 'Food', itemName: 'Pizza' },
  { id: 3, timestamp: 1656076800000, price: 90, category: 'Liquid', itemName: 'Coca-Cola' },
  { id: 4, timestamp: 1656076800000, price: 70, category: 'Dessert', itemName: 'Ice-Cream' }
];

calculateTotalSpentByCategory(transactions);
