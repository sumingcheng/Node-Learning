const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'word.txt')

fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error(err.toString())
  } else {
    console.log(data)
  }
})
