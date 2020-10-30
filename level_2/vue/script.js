new Vue({
    el: '#app',
    data: {
        countDown : '',
    },

    mounted() {
        let deadline = new Date('Oct 31, 2020 20:10:00').getTime()

        const interval = setInterval(() => {
            let currentTime = new Date().getTime();
            let distance = deadline - currentTime;
          
            let hours = Math.floor((distance / (1000 * 60 * 60)));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            if(hours + minutes + seconds <= 0) {
                const timeSpan = document.getElementById('timer');
                const fireworks = document.getElementById('fireworks');
                fireworks.className = 'pyro'
            
                timeSpan.style = 'text-align:center; font-size:12em'
                this.countDown = '🚀'; 
            
                return clearInterval(interval)
            }

            hours = this.addZero(hours)
            minutes = this.addZero(minutes)
            seconds = this.addZero(seconds)
            
            this.countDown = "🚨 " + hours +'h ' + minutes + 'm ' + seconds + 's';
          }, 1000)
          
    },

    methods : {

        addZero(num) {
            return (num<10 ? "0" + num : num)
        },

    },
})