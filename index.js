class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string){
    //declare all the words not to be capitalized 
    const alwaysLowerCase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']; 
    //split the string into an array at lowercase for comparison in the loop
    const words = string.toLowerCase().split(' '); 

    //loop through string turned array and if index is [0] or || word is not a forbidden word then we'll capitalize the word using the static capitalize method above 
    for (let i = 0; i < words.length; i++){
      if (i === 0 || !alwaysLowerCase.includes(words[i])){
        words[i] = this.capitalize(words[i]); 
      }
    }
    return words.join(' '); 
  }
}