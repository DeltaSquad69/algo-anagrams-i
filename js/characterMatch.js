exports.isCharacterMatch = function(string1, string2) {
    const s1 = string1.toLowerCase().replace(/ /g, "");
    const s2 = string2.toLowerCase().replace(/ /g, "");
    
    if (s1.length != s2.length){
        return false
    };
    const counts1 = {};
    const counts2 = {};

    for (const char of s1){
        counts1[char] = (counts1[char] || 0) + 1
    };
    for (const char of s2){
        counts2[char] = (counts2[char] || 0) + 1
    };
    
    const keys1 = Object.keys(counts1)
    const keys2 = Object.keys(counts2)

    if (keys1.length !== keys2.length){
        return false
    }

    return keys1.every(char => counts1[char] === counts2[char])
    
};
