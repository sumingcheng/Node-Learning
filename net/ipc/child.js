

process.on('message', (msg) => {
  console.log(`孩子收到了来自家长的消息: ${msg}`);
});

process.send('hello from child');
