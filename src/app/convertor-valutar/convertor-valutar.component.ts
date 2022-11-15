import { Component, OnInit } from '@angular/core';
import { Convertor } from '../convertor/convertor';

@Component({
  selector: 'app-convertor-valutar',
  templateUrl: './convertor-valutar.component.html',
  styleUrls: ['./convertor-valutar.component.css']
})
export class ConvertorValutarComponent implements OnInit {
  convertor: Convertor = new Convertor();
  eurRonValue = 4.9;
  currencyValueEur = 1;
  currencyValueUsd = 1;
  currencyValueGbp = 1;
  usdRonValue = 5;
  gbpRonValue = 6;
  totalEur = 0;
  totalUsd = 0;
  totalGbp = 0;
  valueFixed = this.totalEur.toFixed(2);
  
  constructor() { }

  ngOnInit(): void {
  }

  resultConvertorValutarEur(): void {
    
    this.totalEur = this.convertor.calculatingConversionCurrencyEur(
      this.eurRonValue,
      this.currencyValueEur
    );
    console.log('eur: ' + this.totalEur.toFixed(2));
  }

  resultConvertorValutarUsd():void {
    this.totalUsd = this.convertor.calculatingConversionCurrencyUsd(this.usdRonValue, this.currencyValueUsd);
  }

  resultConvertorValutarGbp(): void{
    this.totalGbp = this.convertor.calculatingConversionCurrencyGbp(this.gbpRonValue, this.currencyValueGbp);
  }
}
