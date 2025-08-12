// lib/errors/handlers.ts
import { z } from 'zod'

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
    public details?: Record<string, any>
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export class ValidationError extends AppError {
  constructor(issues: z.ZodIssue[]) {
    super('Validation failed', 'VALIDATION_ERROR', 400, { issues })
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 'NOT_FOUND', 404)
  }
}

export class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized', 'UNAUTHORIZED', 401)
  }
}

// app/error.tsx
'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button
        onClick={reset}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  )
}