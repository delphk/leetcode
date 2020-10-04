var longestCommonPrefix = function (strs) {
  let longest = "";
  let idx = 0;
  while (strs[0] && idx < strs[0].length) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][idx] !== strs[0][idx]) return longest;
    }
    longest += strs[0][idx];
    idx++;
  }
  return longest;
};
