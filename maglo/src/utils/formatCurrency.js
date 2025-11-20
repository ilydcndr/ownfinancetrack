import currency from 'currency.js';

export const formatUSD = (amount) => {
  return currency(amount, { symbol: '$', separator: ',', decimal: '.', precision: 2 }).format();
};
