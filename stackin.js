function rev(str){
    let stack = []

    for (let s = 0 ; s < str.length; s++){
        stack.push(str[s]);
    }

    let reverseofst = '';
    while (stack.length > 0){
        reverseofst += stack.pop();
    }
    if (reverseofst == str){
        console.log("it is also a pallindrome")
    }
    return reverseofst
}
console.log(rev('mat'))



