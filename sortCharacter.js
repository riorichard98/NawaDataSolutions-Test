function sortCharacter(str) {
    str = str.toLowerCase()
    let vowelStr = ''
    let consonantStr = ''
    let vowels = {
        a: true, i: true, u: true, e: true, o: true
    }
    for (let i = 0; i < str.length; i++) {
        if(vowels[str[i]]){
            vowelStr += str[i]
        }else if(!vowels[str[i]] && str[i] !==' '){
            consonantStr += str[i]
        }
    }
    console.log('Vowel Characters :\n'+vowelStr+'\n'+'Consonant Characters :\n'+consonantStr);
}
sortCharacter('Sample Case')