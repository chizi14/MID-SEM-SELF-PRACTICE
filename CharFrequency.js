function charFrequency(sentence) {
    let freq = {};
    sentence = sentence.toLowerCase().replace(/\s/g, "");
    for (let char of sentence) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

console.log(charFrequency("Hello World"));