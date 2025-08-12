import { describe, it, expect } from 'vitest'

describe('Basic Tests', () => {
  it('should always pass - math works', () => {
    expect(1 + 1).toBe(2)
    expect(2 * 2).toBe(4)
    expect(10 - 5).toBe(5)
  })

  it('should always pass - strings work', () => {
    expect('hello').toBe('hello')
    expect('world'.length).toBe(5)
    expect('test'.toUpperCase()).toBe('TEST')
  })

  it('should always pass - arrays work', () => {
    const arr = [1, 2, 3]
    expect(arr).toHaveLength(3)
    expect(arr[0]).toBe(1)
    expect(arr.includes(2)).toBe(true)
  })

  it('should always pass - objects work', () => {
    const obj = { name: 'test', value: 42 }
    expect(obj.name).toBe('test')
    expect(obj.value).toBe(42)
    expect(Object.keys(obj)).toHaveLength(2)
  })

  it('should always pass - booleans work', () => {
    expect(true).toBe(true)
    expect(false).toBe(false)
    expect(!true).toBe(false)
    expect(!false).toBe(true)
  })
})