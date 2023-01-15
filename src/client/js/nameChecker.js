function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let regEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    
    const url = inputText

    if(regEx.test(url)){
        return true
    }
    else{
        return false
    }
}

export { checkForName }
