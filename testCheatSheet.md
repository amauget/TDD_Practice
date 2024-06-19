".not" can be paired with most of these...

Common Matchers:
  expect().toBe()
  expect().toEqual()
  

Truthiness:
  .toBeNull()
  .toBeUndefined()
  .toBeDefined()
  .toBeTruthy()
  .toBeFalsy()


Numbers:
  .toBeGreaterThan()
  .toBeGreaterThanOrEqual()
  .toBeLessThan()
  .toBeLessThanOrEqual()
  .toBe()
  .toEqual()

Floats Only:
  .toBeCloseTo() -> used to avoid failed tests due to computing round errors

    ie.
      const value = 0.1 + 0.2
      expect(value).toBe(.3) ---Fails
      expect(value).toBeCloseTo(.3) ---Passes

Strings:
  .toMatch() -- Used for characters or entire sentences

Arrays/Iterables:
  .toContain()

Exceptions:
  .toThrow()