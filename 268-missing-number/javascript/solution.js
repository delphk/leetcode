var missingNumber = function (nums) {
  let nTotal = (nums.length * (nums.length + 1)) / 2;
  let arrTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    arrTotal += nums[i];
  }
  return nTotal - arrTotal;
};
