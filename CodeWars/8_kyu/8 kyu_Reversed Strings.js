// 8 kyu. Reversed Strings

function solution(str){
    let reverseStr = '';
    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}