export function formatToReais(amount: number) {
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function convertBackToNumber(formattedValue: string) {
  const cleaned = formattedValue.replace(/[^0-9]/g, '');
  return parseFloat(cleaned) / 100;
}
