import { Component, Input } from '@angular/core';

import { InvestmentInput } from '../investment-input.model';
import { InvestmentResult } from '../investment-result.model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) data?: InvestmentResult[];
}
