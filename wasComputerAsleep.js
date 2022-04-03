let lastTime = new Date().getTime();

// interval to detect if the computer went to sleep and just woke up
function wasComputerAsleep(callback) {
  setInterval(function () {
    let now = new Date().getTime();
    if (now - lastTime > 2000 * 2) {
      // computer went to sleep
      console.log('Computer went to sleep');
      callback();
    }
    lastTime = now;
  }, 2000);
}

module.exports = wasComputerAsleep;
