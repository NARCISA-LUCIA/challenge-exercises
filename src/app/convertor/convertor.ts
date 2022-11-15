export class Convertor {
    calculatingConversionCurrencyEur(
      inputValueEur: number,
      currencyEur: number
    ): number {
      let result = inputValueEur * currencyEur;
      return result;
    }
  
    calculatingConversionCurrencyUsd(
      inputValueUsd: number,
      currencyUsd: number
    ): number {
      const result = inputValueUsd * currencyUsd;
      return result;
    }
  
    calculatingConversionCurrencyGbp(
      inputValueGbp: number,
      currencyGbp: number
    ): number {
      const result = inputValueGbp * currencyGbp;
      return result;
    }
  }
  