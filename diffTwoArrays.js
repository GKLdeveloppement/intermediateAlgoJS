/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {

    let newArr = arr1
                   //On va venir garder les éléments du arr1 qui ne sont pas présent dans arr2
                   .filter(x => !arr2.includes(x))
                   //On va venir garder les élément du arr2 qui ne sont pas présent dans arr1 et on concatene les contenus de ce filtre et du précédent
                   .concat(arr2.filter(x => !arr1.includes(x)));
    console.log(newArr)
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);