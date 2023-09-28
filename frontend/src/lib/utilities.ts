export function formatAmount(
  amount: number,
  locales: string | undefined = "fr-FR",
  currency: string | undefined = "EUR"
) {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  }).format(amount);
}
