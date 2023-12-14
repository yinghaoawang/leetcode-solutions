// input: arr prices where i refers to price of stock on ith day
// return maximum profit from buying the stock on a certain day, and selling it on another day
function maxProfit(prices) {
  // 7,1,5,3,6,4
  // lowVal: 1 highVal: 6
  // maxProfit: 5
  // currLow: 4
  // currHigh: 4
  // currProfit: 0
  
  // 3,7,8,1,6
  // l r p maxP
  // 3 7 4 4
  // 3 8 5 4
  // 3 1 -2 4
  // 1 6 5 5
  return slidingWindow(prices);
}

function slidingWindow(prices) {
  // initialize vars
  let l = 0, r = 1, maxProfit = 0;
  // iterate through prices using l & r 
  while (r < prices.length) {
      // calculate current profit, and set maxProfit if is larger
      const profit = prices[r] - prices[l];
      if (profit > maxProfit) maxProfit = profit;
      // slide l to r if r the r value is larger
      if (prices[l] >= prices[r]) l = r;
      // slide r once every time
      r++;
  }
  // we return the max profit we found
  return maxProfit;
}

function bruteForce(prices) {
// initialize variables
  let maxI, maxJ = 0;
  let maxProfit = 0;
  // iterate through profits with lowI, and highI
  for (let i = 0; i < prices.length; i++) {
      const iVal = prices[i];
      for (let j = i + 1; j < prices.length; j++) {
          const jVal = prices[j];
          const currProfit = jVal - iVal;
          if (currProfit > maxProfit) {
              maxProfit = currProfit;
              maxI = i;
              maxJ = j;
          }
      }
  }
  return maxProfit;
}