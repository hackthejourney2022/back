import { Injectable } from '@nestjs/common';
import { CurrencyQuotationClient } from 'src/core/domain/client';

const MOCKED_CURRENCY_QUOTATION = 6;

@Injectable()
export class MockedCurrencyQuotationClient implements CurrencyQuotationClient {
    async getCurrentQuotation(
        _sourceCurrency: string,
        _targetCurrency: string,
    ): Promise<number> {
        return MOCKED_CURRENCY_QUOTATION;
    }
}
