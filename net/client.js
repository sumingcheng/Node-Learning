const net = require('net');

const HOST = '127.0.0.1';
const PORT = 3000;

const client = net.createConnection({ host: HOST, port: PORT }, () => {
  console.log(`Connected to server on ${HOST}:${PORT}`);
  
  process.stdin.on('data', (data) => {
    console.log(`Sending message to server: ${data.toString().trim()}`);
    client.write(data);
  });
});

client.setEncoding('utf8');

client.on('data', (data) => {
  console.log(`Received message from server: ${data}`);
});

client.on('close', () => {
  console.log('Connection to server closed');
});

client.on('error', (error) => {
  console.error(`Connection failed: ${error}`);
});
