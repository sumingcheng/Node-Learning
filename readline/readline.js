const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function askQuestion(question) {
  return new Promise(resolve => {
    rl.question(question, resolve)
  })
}

async function main() {
  const answer1 = await askQuestion('你认为node.js最大的优点是什么？ ')
  console.log(`你的回答是：${answer1}`)

  const answer2 = await askQuestion('你认为你的最大的优点是什么？ ')
  console.log(`你的回答是：${answer2}`)

  const answer3 = await askQuestion('1+1=? ')
  if (answer3 == 2) {
    console.log('回答正确')
  } else {
    console.log('回答错误')
  }

  rl.close()
}

main()