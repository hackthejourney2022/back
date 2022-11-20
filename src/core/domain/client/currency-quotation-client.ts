export abstract class CurrencyQuotationClient {
    abstract getCurrentQuotation(
        sourceCurrency: string,
        targetCurrency: string,
    ): Promise<number>;
}
