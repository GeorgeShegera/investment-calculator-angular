import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentInput } from '../investment-input.model';
import { InvestmentResult } from '../investment-result.model';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) data?: InvestmentResult[];
}
