import { createServer, IncomingMessage, ServerResponse } from 'node:http';

const PORT = 3000;

// Create the server with typed parameters
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  // Send a response for every reques
  if(req.url === '/about'){
     res.end('Hello from Dhinesh and TypeScript server!\n');
  }else{
     res.end('Hello from the pure Node.js and TypeScript server!\n');
  }
 
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});