/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    //Regex permettant de récupérer tout ce qui est différent des voyelles (les consonnes)
    let consonantRegex = /^[^aeiou]+/;
    //On récupère la chaine de consonne avant de tomber sur une voyelle
    let myConsonants = str.match(consonantRegex);
  
    //Si la variable n'est pas nul c'est qu'on débute par une consonne
    return myConsonants !== null
      ? str
          //On supprime la consonne
          .replace(consonantRegex, "")
          //On la concatène pour la retrouvé à la fin
          .concat(myConsonants)
          //On ajoute le suffixe "ay"
          .concat("ay")
          //Sinon le mot commence par une voyelle on ajoute juste le suffixe
      : str.concat("way");
  
  }
  
  translatePigLatin("glove");