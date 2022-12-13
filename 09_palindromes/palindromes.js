var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}


const palindromes = function (string) {
    let nospacestring = (string.replace(/\s+/g, '')).toLowerCase();
    nospacestring.replace(/[^\w\s\']|_/g, "");
    let nopunct = removePunctuation(nospacestring);
    let reversed = nopunct.split('').reverse().join('');
    if (nopunct==reversed){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
