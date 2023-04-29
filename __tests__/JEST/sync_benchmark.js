const { isEmpty, notEmpty } = require("../../dist");

const itemCount = 1000000;

test('benchmarking isEmpty', async () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    await isEmpty(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));
  //console.log(average);

  expect(average).toBeGreaterThan(2000); //? Items Per Millisecond
});

test('benchmarking notEmpty', async () => {
  const start = Date.now();
  for (let i = 0; i < itemCount; i++) {
    await notEmpty(i);
  }
  const average = (1 / ((Date.now() - start) / itemCount));
  //console.log(average);

  expect(average).toBeGreaterThan(2000); //? Items Per Millisecond
});
