numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function createPhoneNumber(numbers){
  let num = numbers.join('')
  return `(${num.slice(0, 3)})${num.slice(3, 6)}-${num.slice(6)}`
}
console.log(createPhoneNumber(numbers)) // (123) 456-7890