 //1
 function _1(num) {
    return parseInt(num.toString().split('').reverse().join(''));
} 
console.log(_1(32243));

//2
function _2(word) {
    return word.split('').reverse().join('') == word;
}
console.log(_2('madam'));

//3
function _3(string) {
    let output = [];
    for(let i=0; i< string.length; i++){
        for(let j= i+1; j<string.length + 1; j++){
            output.push(string.slice(i,j));
        }
    }
    return output;
}
console.log(_3('dog'));

//4
function _4(string) {
    return string.split('').sort().join('');
}
console.log(_4('webmaster'));

//5
function _5(string) {
    let words = string.split(' ');

    return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
}
console.log(_5('the quick brown fox'));

//6
function _6(string) {
    let words = string.split(' ');
    let longest = 0;
    let longestIndex;
    for (let i=0; i < words.length; i++) {
        if (words[i].length > longest){
            longest= words[i].length;
            longestIndex= i;
        }
    }
    return words[longestIndex];
}
console.log(_6('Web Development Tutorial'));

//7
function _7(string) {
    let vowels = new Set(['a','e','i','o','u']);
    let chars = string.split('');
    let count = 0;
    for (char of chars) {
        if(vowels.has(char)) {
            count++;
        }
    }
    return count;
}
console.log(_7('the quick brown fox'));

//8
function _8(number) {
    if (number>1) {
        for (let i = 2, j = Math.sqrt(number); i <= j; i++) {
            if (number % i == 0) {
                return false;
            }
        }
    }
    return true;
}
console.log(_8(719));

//9
function _9(type) {
    return typeof(type);
}
console.log(_9('abc'));

//10
function _10(n) {
    let matrix = [];
    for(let i=0; i <n;i++){
        let row =[];
        for(let j=0; j<n;j++){
            row.push(0);
        }
        matrix.push(row);
    }
    for(let i=0; i <n;i++){
        matrix[i][i] = 1;
    }
    return matrix;
}
console.log(_10(5));

//11
function _11(array) {
    array.sort((a, b) => a - b);
    let output = [];
    if (array.length >3) {
        output.push(array[1])
        output.push(array[array.length-2]); 
    } else if(array.length == 3) {
        output.push(array[1]);
    } else {
        output.push('Not enough numbers to say there is a second lowest or greatest!');
    }
    return output;
}
console.log(_11([1,2,3,4,5]));

//12
function _12(number) {
    let sum =0;
    for (let i=1; i<number;i++){
        if(number%i == 0){
            sum +=i;
        }
    }
    if(sum==number) {
        return true;
    } else {
        return false;
    }
}
console.log(_12(28));

//13
function _13(positive_integer) {
    let factors = [];
    for(let i=1; i<=positive_integer;i++){
        if(positive_integer%i ==0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(_13(6));

//14 
function _14(amount, coin_array) {
    coin_array.sort((a, b) => b - a);
    let sum = 0;
    let i = 0;
    let output =[];
    remainder = amount;
    while (sum < amount) {
        if(amount > coin_array[i]){
            let coins = ((amount-(amount%coin_array[i]))/coin_array[i]);
            sum += coins*coin_array[i];
            output.push(coins);
        }
        i +=1;
    }
    return output;
}
//console.log(_14(46, [25, 10, 5, 2, 1]));

//15
function _15(b, n) {
    return Math.pow(b,n);
}

//16
function _16(string){
    unique = new Set();
    chars= string.split('');
    for (char of chars){
        unique.add(char);
    }
    return Array.from(unique).join('');
}
console.log(_16('thequickbrownfoxjumpsoverthelazydog'));

//17
function _17(string){
    chars= string.split('');
    letter_count = new Map();
    for (char of chars){
        letter_count.set(char, letter_count.get(char) +1 || 1);
    }
    return letter_count;
}
console.log(_17('thequickbrownfoxjumpsoverthelazydog'));

//18
function _18(value, array) {
    let start = 0;
    let end = array.length-1;
    while(start <= end) {
        let middle = Math.floor((start + end)/2);
        if(array[middle] === value) {
            return middle;
        } else if (array[middle] < key) {
            start = middle +1;
        } else {
            end = middle -1;
        }
    }
    return 'didnt find it';
}
console.log(_18(5,[25, 10, 5, 2, 1]));

//19
function _19(number, array) {
    return array.filter( (el) => {
        return el > number;
    })
}
console.log(_19(7,[25, 10, 5, 2, 1]));

//20
function _20(number) {
    let output = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let max = chars.length;
    for(let i=0;i<number;i++) {
        output += chars.charAt(Math.floor(Math.random()*max));
    }
    return output;
}
console.log(_20(7));

//21
function _21(array, size) {
    let output = [];
    for(let i=0; i< Math.pow(2, array.length); i++) {
        let arr = [];
        let j = array.length;
        do {
            if( (i & (1 << j)) !== 0) {
                arr.push(array[j]);
            }
        } while (j--);
        if(arr.length >= size){
            output.push(arr);
        }
    }
    return output;
}
console.log(_21([1, 2, 3], 2));

//22
function _22(string, letter) {
    chars= string.split('');
    let count =0;
    for (char of chars){
        if(char == letter){
            count += 1;
        }
    }
    return count;
}
console.log(_22('microsoft.com','o'));

//23
function _23(string) {
    for (let i=0; i<string.length; i++) {
        let char = string.charAt(i);
        if (string.indexOf(char) == i && string.indexOf(char,i+1) == -1) {
            return char;
        }
    }
    return 'no nonrepeating characters';
}
console.log(_23('abacddbec'));

//24
function _24(array) {
    for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
console.log(_24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//25
function _25(list){
    list.sort((a,b) => b.length - a.length);
    return list[0];
}
console.log(_25(["Australia", "Germany", "United States of America"]));

//26
function _26(string){
   let s = '';
   let substr = '';
   let chars = string.split('');
   for(let i=0;i<chars.length;i++){
    for(let j=i; j< chars.length;j++) {
        if(s.includes(chars[j])){
            break;
        } else {
            s += chars[j];
        }
        if (substr.length< s.length) {
            substr=s;
            s='';
        }
    }
   }
   return substr;
}
console.log(_26('microsoft.com'));

//27
function _27(string) {
    let start;
    let maxLength;
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            let flag = 1;
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    return string.substring(start, maxLength-1);
}

//28
function _28(func){
    let output = func(argument);
    console.log(output)
}

//29
function _29(func){
    return func.name;
}
console.log(_29(_25));





















