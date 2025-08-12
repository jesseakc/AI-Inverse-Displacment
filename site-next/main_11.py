// scripts/deploy.ts
import { execSync } from 'child_process'
import fetch from 'node-fetch'

async function checkLighthouse() {
  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${process.env.PRODUCTION_URL}&category=performance&strategy=mobile`
  )
  const data = await response.json()
  
  const score = data.lighthouseResult.categories.performance.score * 100
  
  if (score < 90) {
    throw new Error(`Lighthouse score too low: ${score}`)
  }
  
  console.log(`Lighthouse score: ${score}`)
}

async function deploy() {
  console.log('🔍 Running tests...')
  execSync('npm test', { stdio: 'inherit' })
  
  console.log('📊 Running E2E tests...')
  execSync('npm run test:e2e', { stdio: 'inherit' })
  
  console.log('🚀 Building application...')
  execSync('npm run build', { stdio: 'inherit' })
  
  console.log('📈 Checking performance...')
  await checkLighthouse()
  
  console.log('🌐 Deploying to Vercel...')
  execSync('vercel --prod', { stdio: 'inherit' })
  
  console.log('✅ Deployment complete!')
}

deploy().catch(console.error)