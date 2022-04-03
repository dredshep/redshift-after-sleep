const { exec } = require('child_process');
const wasComputerAsleep = require('./wasComputerAsleep');

function resetRedshift() {
  exec('redshift -x', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    exec('redshift -O 3000', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    });
  });
}

function main() {
  resetRedshift();
  wasComputerAsleep(function () {
    setTimeout(resetRedshift, 6000);
  });
}

main();
