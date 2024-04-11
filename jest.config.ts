import type { Config } from '@jest/types'
import nextJest from 'next/jest.js'
import { compilerOptions } from './tsconfig.json';
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Define your moduleNameMapper configuration
const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/src/$1', // Example alias mapping
}
 
// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: moduleNameMapper,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)