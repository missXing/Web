function test(name: string): string {
  return 'hello:' + name
}

let currName: string = 'mx'
console.log(test(currName))