export class CountdownTimer {
  constructor({selector, targetDate}) {
    this.targetDate = new Date (targetDate);
    this.valueDays = document.querySelector(`${selector} .value[data-value="days"]`);
    this.valueHours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.valueMins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.valueSecs = document.querySelector(`${selector} .value[data-value="secs"]`);
  }

  init () {
    setInterval(() => {
      const time = this.targetDate.getTime() - Date.now();
      this.parseDate(time);
    }, 1000)
  }

  parseDate(time) {
    this.valueDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.valueHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.valueMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.valueSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  }

  pad(value) {
    return String(value).padStart(2, 0);
  };

}
