class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        for i in range(len(strs[0])):
            for str in strs[1:]:
                 if i >= len(str) or str[i] != strs[0][i]:
                    return strs[0][:i]

        return strs[0]