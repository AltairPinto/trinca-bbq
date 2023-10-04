export function formatToReais(amount: number) {
  if (amount)
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
}
