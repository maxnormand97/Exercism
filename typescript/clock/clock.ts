export class Clock {
  readonly hour: number
  readonly minute: number

  constructor(hour: number, minute: number = 0) {
    const totalMinutes = hour * 60 + minute;
    const clockMinutes = ((totalMinutes % 1440) + 1440) % 1440; // 1440 minutes in a day

    this.hour = Math.floor(clockMinutes / 60);
    this.minute = clockMinutes % 60;
  }

  public toString(): string {
    return `${this.padZero(this.hour)}:${this.padZero(this.minute)}`;
  }

  private padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute;
  }
}