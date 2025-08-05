//Implementing a vowel Counter

function VowelCounter (sentence){
    let vowels = "aeiou"
    let count = 0;
    sentence = sentence.toLowerCase();

    for (let char of sentence){
        if (vowels.includes(char)){
            count++
        }
    }
    return count


}
// example usage
console.log(VowelCounter("How are you feeling today?"))
console.log(VowelCounter("Nothing beats a jet two holiday"))
