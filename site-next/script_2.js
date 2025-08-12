// app/api/updates/route.ts
export const dynamic = 'force-dynamic';

export async function GET() {
  const encoder = new TextEncoder();
  
  const readable = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        const data = `data: ${JSON.stringify({ time: new Date() })}\n\n`;
        controller.enqueue(encoder.encode(data));
      }, 1000);
      
      return () => clearInterval(interval);
    },
  });
  
  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}