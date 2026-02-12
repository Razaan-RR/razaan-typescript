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