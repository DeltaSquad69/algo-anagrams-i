def is_character_match(string1, string2):
    s1 = string1.lower().replace(" ", "")
    s2 = string2.lower().replace(" ", "")
    if len(s1) != len(s2):        # guard first, real length check
        return False
    counts1 = {}
    counts2 = {}
    for char in s1:               # loop the STRING, build the dict
        counts1[char] = counts1.get(char, 0) + 1   # store into counts1
    for char in s2:
        counts2[char] = counts2.get(char, 0) + 1   # store into counts2
    return counts1 == counts2     # one return, after both loops