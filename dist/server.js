import { createServer, IncomingMessage, ServerResponse } from 'node:http';
const PORT = 3000;
// Create the server with typed parameters
const server = createServer((req, res) => {
    // Send a response for every request
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the pure Node.js and TypeScript server!\n');
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map