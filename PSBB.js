function PSBB(nFamily,familyMembers){
    if(nFamily !== familyMembers.split(' ').length){
        console.log('Input must be equal with count of family');
        return 'Input must be equal with count of family'
    }
    let obj = {}
    let count = 0
    for(let i = 0 ; i < familyMembers.length ; i+=2){
        obj[4 - familyMembers[i]] = i
        if(familyMembers[i+2] === '4'){
            count++
            i+=2
        }else if(obj[familyMembers[i+2]] >= 0){
            count++
            delete obj[familyMembers[i+2]]
            i+=2
        }
    }
    let temp = 0
    for (const property in obj) {
        temp += (4 - property)
    }
    const output = count + Math.ceil(temp/4)
    console.log(output);
}

// finished it with O(N) time complexity
PSBB(5,'1 2 4 3 3')
PSBB(8,'2 3 4 4 2 1 3 1')
PSBB(5,'1 5')

