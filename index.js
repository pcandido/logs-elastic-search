const loggerDecorator = require('./decorator')

const sum = (a, b) => a + b
const factorial = n => new Array(n).fill().map((a, i) => i + 1).reduce((a, b) => a * b)
const heavyFn = () => {
  for (let i = 0; i < factorial(10); i++) { }
  return 'done'
}
const errorFn = () => {
  throw new Error('Ocorreu um erro ao processar sua solicitação')
}

const loggedSum = loggerDecorator(sum)
const loggedFactorial = loggerDecorator(factorial)
const loggedHeavyFn = loggerDecorator(heavyFn)
const loggedErrorFn = loggerDecorator(errorFn)

console.log('2 + 3 =', loggedSum(2, 3))
console.log('5 + 7 =', loggedSum(5, 7))
console.log('5! =', loggedFactorial(5))
console.log('30! =', loggedFactorial(30))
console.log('heavy:', loggedHeavyFn())
try {
  loggedErrorFn()
} catch (e) {
  console.log('error function:', e.message)
}
