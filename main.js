var targetDate = new Date("2020-10-30T17:00:00.000-08:00");

new Vue({
  el: '#countdown-app',
  data: {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  },
  methods: {
    countdown() {
      intervalTimer = setInterval(() => {
        secondsLeft = Math.round((targetDate.getTime() - Date.now()) / 1000);
        secondsLeft = Math.max(secondsLeft, 0);
        this.updateTime(secondsLeft);
      }, 1000);
    },
    updateTime(secondsLeft) {
      days = Math.floor(secondsLeft / (24*60*60));
      hours = Math.floor(secondsLeft / (60*60) % 24);
      minutes = Math.floor(secondsLeft / 60  % 60);
      seconds = secondsLeft % 60;
      this.days = `${days}`;
      this.hours = `${zeroPadded(hours)}`;
      this.minutes = `${zeroPadded(minutes)}`;
      this.seconds = `${zeroPadded(seconds)}`;
    },
  },
  created () {
    this.countdown();
  },
})

function zeroPadded(num) {
  // 4 --> 04
  return num < 10 ? `0${num}` : num;
}
