document.addEventListener("DOMContentLoaded", function () {
    const workTimeDisplay = document.getElementById("work-time");
    const breakTimeDisplay = document.getElementById("break-time");

    let workTimer;
    let breakTimer;

    function startWorkTimer() {
        let duration = 25 * 60; // 25 minutes
        updateTimerDisplay(workTimeDisplay, duration);
        workTimer = setInterval(function () {
            duration--;
            updateTimerDisplay(workTimeDisplay, duration);

            if (duration === 0) {
                clearInterval(workTimer);
                startBreakTimer();
            }
        }, 1000);
    }

    function startBreakTimer() {
        let duration = 5 * 60; // 5 minutes
        updateTimerDisplay(breakTimeDisplay, duration);
        breakTimer = setInterval(function () {
            duration--;
            updateTimerDisplay(breakTimeDisplay, duration);

            if (duration === 0) {
                clearInterval(breakTimer);
            }
        }, 1000);
    }

    function updateTimerDisplay(display, duration) {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    document.getElementById("start-work").addEventListener("click", startWorkTimer);
    document.getElementById("pause-work").addEventListener("click", function () {
        clearTimeout(workTimer);
    });
    document.getElementById("reset-work").addEventListener("click", function () {
        clearInterval(workTimer);
        workTimeDisplay.textContent = "25:00";
    });
});
