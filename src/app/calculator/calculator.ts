export class Calculator {
  calculatingTheSum(firstColumn: number, secondColumn: number): number {
    let sum = firstColumn + secondColumn;
    return sum;
  }

  calculatingTheSubstraction(
    firstColumn: number,
    secondColumn: number
  ): number {
    let substraction = firstColumn - secondColumn;
    return substraction;
  }

  calculatingTheMultiplication(
    firstColumn: number,
    secondColumn: number
  ): number {
    let multiplication = firstColumn * secondColumn;
    return multiplication;
  }

  calculatingTheDivision(firstColumn: number, secondColumn: number): number {
    let division = firstColumn / secondColumn;
    return division;
  }
}
