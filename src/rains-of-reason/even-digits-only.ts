function evenDigitsOnly(n: number): boolean {
  return (n + '')
    .split('')
    .every((v: any) => v % 2 === 0)
}
