
class CountdownTimer {

    constructor({ selector, targetDate}) {
        this.clock = document.querySelector(selector);
        this.days = this.clock.querySelector('[data-value="days"]');
        this.hours = this.clock.querySelector('[data-value="hours"]');
        this.minutes = this.clock.querySelector('[data-value="mins"]');
        this.seconds = this.clock.querySelector('[data-value="secs"]');
        this.targetDate = targetDate;

        
        
    }


  start() {
      
    if ( (this.targetDate - Date.now()) <= 0 ) {
      return;
    }

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComponent = this.getTimeComponents(deltaTime);
            
            this.updateClock(timeComponent);
            
            }, 1000);
        
    }

    getTimeComponents (time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }


    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClock({days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.minutes.textContent = `${mins}`;
    this.seconds.textContent = `${secs}`;
}



}



const timer = new CountdownTimer({
  
  selector: '#timer-1',
  targetDate: new Date('Jul 3, 2022'),
});

// const timer2 = new CountdownTimer({
  
//   selector: '#timer-2',
//   targetDate: new Date('Jul 17, 2022'),
// });

timer.start()















