var plusOne = function (digits) {
  let idx = digits.length - 1;
  while (digits[idx] === 9) {
    digits[idx] = 0;
    idx--;
    if (idx < 0) digits.unshift(1);
  }
  if (idx >= 0) {
    digits[idx]++;
  }
  return digits;
};
