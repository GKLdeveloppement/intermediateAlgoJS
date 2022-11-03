/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

    // Var contenant la regex pour les espaces et les underscores
    var regex = /\s+|_+/g;
  
    // Permet de remplacer les minuscule et Maj qui se suivent par une minuscule "escpace" majuscule
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    //On remplace les espaces par les -
    return str.replace(regex, "-").toLowerCase();
  
  }
  
  spinalCase('This Is Spinal Tap');