// javascript objects
var cryptoData = {
  date: "21 may, 2024",
  currencies: [
      {
          'name': "BitCoin",
          "exchangeRate": 97000,
          'foundIn': '2005'
      },
      {
          'name': "Ethereum",
          "exchangeRate": 3200,
          'foundIn': '2013'
      },
      {
          'name': "DogeCOIN",
          "exchangeRate": 0.32,
          'foundIn': '2016'
      },
      {
          'name': "Stack",
          "exchangeRate": 2.2,
          'foundIn': '2019'
      }
  ],
}

// There are 4 currency data
// The rate of bitcoin is 97000 as of 21 may, 2024


cryptoData.currencies.push({ // add new coin 
  'name': "Solana",
  "exchangeRate": "190",
          'foundIn': "2020"
})


// crypto.currencies[3].exchangeRate= 2.45; // change the rate

console.log(`There are ${cryptoData.currencies.length} currency data`); // show the no of currenices

console.log(`The rate of ${cryptoData.currencies[0].name } is ${cryptoData.currencies[0].exchangeRate } as of ${cryptoData.date}`); // show the data 

//print exchange rate of all currencies


for (i=0; i<`${cryptoData.currencies.length}`; i++){

  console.log(`${cryptoData.currencies[i].exchangeRate}`);
}




