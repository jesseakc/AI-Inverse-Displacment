// vercel.json
{
  "regions": ["iad1", "sfo1"],
  "functions": {
    "app/api/search/route.ts": {
      "maxDuration": 30,
      "runtime": "edge"
    },
    "app/api/webhook/route.ts": {
      "maxDuration": 300,
      "memory": 1024
    }
  },
  "crons": [{
    "path": "/api/cleanup",
    "schedule": "0 2 * * *"
  }]
}