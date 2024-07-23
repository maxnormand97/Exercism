export function sum(items: number[], level: number): number {
  // using set allows you to avoid duplicates out of the box
  let multiples = new Set<number>()
  // loop and increment by itself
  items.forEach((item) => {
    if(item === 0) {
      return
    }
    for (let index = item; index <= level; index+= item) {
      if(index !== level) {
        multiples.add(index)
      }
    }
  })
  // create new array from set and reduce the cleaned array to get the total
  return Array.from(multiples).reduce((total, num) => total + num, 0)
}
