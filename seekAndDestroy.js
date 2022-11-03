/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/


function destroyer(arr) {
    //On récupère les params sous forme d'array et on ne garde que ce qui se trouve après le premier param (car c'est la tableau sur lequel on travail ensuite)
    const args = [...arguments].slice(1);
    console.log(args)
    //On filtre en ne gardant que les elements du tableau qui ne correspondent pas aux arguments passés
    return arr.filter(val => !args.includes(val))
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);