const { isEmptyNested, isNotEmptyNested } = require('../../dist/v_is_empty_value.cjs')
const nestedTestItems = require('../data/')

nestedTestItems.forEach((item) => {
  if (typeof item.nestExpect === 'undefined') return true

  const textTextName = `🆔 ${item.uid} | ${String(item.input)} :: [isEmptyNested|isNotEmptyNested] >> ${item.nestExpect}`
  test(textTextName, () => {
    expect(isEmptyNested(item.input)).toBe(item.nestExpect)
    expect(isNotEmptyNested(item.input)).toBe(!item.nestExpect)
  })
})
