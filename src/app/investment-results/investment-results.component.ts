import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  private readonly investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}
