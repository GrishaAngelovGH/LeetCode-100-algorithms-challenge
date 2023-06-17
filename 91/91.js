const checkPrime = n => {
  let values = []

  for (let i = 2; i < n; i++) {
    values.push(n % i === 0)
  }

  return values.every(v => v === false)
}

const countPrimes = (n) => {
  const primes = []

  for (let i = 2; i < n; i++) {
    const isPrime = checkPrime(i)
    if (isPrime && i < n) {
      primes.push(i)
    }
  }

  return primes.length
}

console.log(countPrimes(10) === 4)
console.log(countPrimes(0) === 0)
console.log(countPrimes(1) === 0)