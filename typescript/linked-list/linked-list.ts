export class LinkedList<TElement> {
  private list: TElement[]
  constructor() {
    this.list = []
  }
  public push(element: TElement): void {
    this.list.push(element)
  }

  public pop(): TElement | undefined {
    return this.list.pop()
  }

  public shift(): TElement | undefined {
    return this.list.shift()
  }

  public unshift(element: TElement): void {
    this.list.unshift(element)
  }

  public delete(element: TElement): void {
    this.list = this.list.filter(item => item !== element)
  }

  public count(): number {
    return this.list.length
  }
}