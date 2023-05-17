const https = require('https')
const fs = require('fs')
const path = require('path')

const getJSON = path.join(__dirname, './getJSON.json')

https.get('https://jsonplaceholder.typicode.com/posts', (response) => {
  let data = ''
  
  response.on('data', (chunk) => {
    data += chunk
  })
  
  response.on('end', () => {
    fs.writeFile(getJSON, data, (error) => {
      if (error) {
        console.error(error)
        return
      }
      console.log('File saved.')
    })
  })
  
}).on('error', (error) => {
  console.error(error)
})
