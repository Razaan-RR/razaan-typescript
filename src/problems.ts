function formatString(input: string, toUpper?: boolean):string{
  if(toUpper===false){
    return input.toLowerCase()
  } 
  else{
    return input.toUpperCase()
  }
}
console.log(formatString('hello'))
console.log(formatString('hello', true))
console.log(formatString('hello', false))




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const result=[]
  for(const item of items){
    if(item.rating>=4){
      result.push(item)
    }
  }
  return result
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
const filteredBooks = filterByRating(books)
console.log(filteredBooks)




function concatenateArrays<T>(...arrays: T[][]): T[]{
  let result: T[] = []
  for (let arr of arrays){
    result = result.concat(arr)
  }
  return result
}
const output = concatenateArrays([1, 2], [3, 4], [5])
console.log(output)




class Vehicle{
  private make:string
  private year:number
  constructor(make:string, year:number){
    this.make=make
    this.year=year
  }
  getInfo():string{
    return `Make: ${this.make}, Year: ${this.year}`
  }
}
class Car extends Vehicle {
  private model:string
  constructor(make:string, year:number, model:string) {
    super(make,year)
    this.model=model
  }
  getModel():string{
    return `Model: ${this.model}`
  }
}
const myCar = new Car("Toyota", 2020, "Corolla")
console.log(myCar.getInfo())  
console.log(myCar.getModel())  




function processValue(value: string | number): number{
  if(typeof value==='string'){
    return value.length
  } 
  else{
    return value*2
  }
}
console.log(processValue("hello")) 
console.log(processValue(10)) 




interface Product {
  name: string
  price: number
}
function getMostExpensiveProduct(products: Product[]): Product | null{
  let mostExpensive=products[0]!
  if(products.length===0){
    return null 
  }
  for(let product of products){
    if(product.price>mostExpensive.price){
      mostExpensive=product 
    }
  }
  return mostExpensive 
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
]
console.log(getMostExpensiveProduct(products))




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
function getDayType(day: Day): string{
  if(day===Day.Saturday || day===Day.Sunday) {
    return "Weekend"
  } 
  else{
    return "Weekday"
  }
}
console.log(getDayType(Day.Monday))   
console.log(getDayType(Day.Sunday))   




