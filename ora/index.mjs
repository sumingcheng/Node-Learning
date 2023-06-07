import ora from 'ora';

const spinner = ora('Loading unicorns').start();
setTimeout(() => {
  spinner.color = 'blue';
  spinner.text = 'Loading rainbows';
}, 1000);
