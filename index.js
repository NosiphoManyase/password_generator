
function generatePassword(){
    let passwordBuild = {
        
        letters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        specialChars : ["!", "@", "#", "$", "%", ")", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
        randomNumIndex: function(){
            return Math.floor(Math.random() * 10)
        },
        randomLetterIndex: function(){
            return Math.floor(Math.random() * this.letters.length)
        },
        randomSpecialIndex: function(){
            return Math.floor(Math.random() * this.specialChars.length)
        } 
    }

    let passwordChars = []

    for (let i = 0; i<4; i++){
        let randomNum = passwordBuild.randomNumIndex()
        passwordChars.push(randomNum)
    }

    for (let i = 0; i<7; i++){
        let randomLetter = ""
        randomLetter = passwordBuild.letters[passwordBuild.randomLetterIndex()]
        passwordChars.push(randomLetter)
    }

    for (let i = 0; i<3; i++){
        let randomSpecialChar = ""
        randomSpecialChar = passwordBuild.specialChars[passwordBuild.randomSpecialIndex()]
        passwordChars.push(randomSpecialChar)
    }
    console.log(passwordChars)

    let finalPassword = ''

    for(let i = 0; i<14; i++){
        randomIndex = Math.floor(Math.random() * passwordChars.length)
        finalPassword += passwordChars[randomIndex]
        passwordChars.splice(randomIndex, 1)
    }

    console.log(finalPassword)
    return finalPassword
}


function getPasswords(){
    let fourPasswords = [generatePassword(), generatePassword(), generatePassword(), generatePassword()] 
    console.log(fourPasswords)
    
    document.getElementById("password-1").value = `${fourPasswords[0]}`
    document.getElementById("password-2").value = `${fourPasswords[1]}`
    document.getElementById("password-3").value = `${fourPasswords[2]}`
    document.getElementById("password-4").value = `${fourPasswords[3]}`

}
