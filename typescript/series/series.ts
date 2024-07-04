export class Series {
  private series

  constructor(series: string) {
    this.series = series
  }

  slices(sliceLength: number): number[] {
    if(this.series === '') {
      throw new Error('series cannot be empty')
    }
    const splitSeries = this.series.split('').map(n => Number(n))
    if(sliceLength === 0 ) {
      throw new Error('slice length cannot be zero')
    }
    if(sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    }
    if(splitSeries.length < sliceLength) {
      throw new Error('slice length cannot be greater than series length')
    }
    let splicePoint = 0
    let result: any[] = []
    return splitSeries.reduce((acc, num) => {
      let subArray = splitSeries.slice(splicePoint, splicePoint + sliceLength);
      if(subArray.length === sliceLength) {
        result.push(subArray)
      }
      splicePoint += 1
      return acc
    }, result)
  }
}
