const { exec } = require('child_process')

exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})
