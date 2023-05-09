class ProductOfNumbers {
  constructor() {
    this.values = []
  }

  add(num) {
    this.values.push(num)
  }

  getProduct(k) {
    return this.values.slice(-k).reduce((a, b) => a * b)
  }
}

const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]

console.log(productOfNumbers.getProduct(2) === 20)
console.log(productOfNumbers.getProduct(3) === 40)
console.log(productOfNumbers.getProduct(3) === 40)
console.log(productOfNumbers.getProduct(4) === 0)

productOfNumbers.add(8);        // [3,0,2,5,4,8]
console.log(productOfNumbers.getProduct(2) === 32)