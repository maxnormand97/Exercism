export class Gigasecond {
  private calcDate: Date

  constructor(calcDate: Date) {
    this.calcDate = calcDate
  }
  public date() {
    const dateInSeconds = Math.floor(this.calcDate.getTime() / 1000);
    const newDateInSeconds = dateInSeconds + 1000000000; // Add one thousand million seconds
    const newDate = new Date(newDateInSeconds * 1000); // Convert back to Date object
    return newDate
  }
}
