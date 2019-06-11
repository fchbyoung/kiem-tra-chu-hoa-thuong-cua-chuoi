function upperCase(str) {
    let regexp = /^[A-Z]/;
    let result = regexp.test(str);
    if(result == true){
        alert("String\'s first character is uppercase");
    }else{
        alert("String\'s first character is not upppercase");
    }
}
upperCase("I love you");