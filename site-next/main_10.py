// app/api/socket/route.ts
import { Server } from 'socket.io';

export async function GET() {
  const io = new Server((await import('http')).createServer());
  
  io.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
    });
    
    socket.on('message', (data) => {
      socket.to(data.roomId).emit('message', data);
    });
  });
  
  return new Response('Socket server running');
}