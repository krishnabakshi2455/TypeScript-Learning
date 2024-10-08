// String Methods: How can you check if a string contains a specific substring ? Provide an example using the string "Hello, World!".



function specificsubstring(params: string) {

    let specialCharacters: string[] = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
        "{", "}", "[", "]", ":", ";", "'", "\"", "<", ">", ",", ".", "?", "/",
        "\\", "|", "~", "`"
    ];
    specialCharacters.forEach(element => {
        if (params.includes(element)) {
            console.log(`there is an specific substring ${element}`);
        }else{
            console.log(`there is no specific substring`);
        }
    });



}

console.log(specificsubstring("Hello, Wor@ld!"));
