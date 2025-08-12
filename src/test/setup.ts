// Test setup file - configure global test environment
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Global test configuration
expect.extend({})