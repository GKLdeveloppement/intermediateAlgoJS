/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {

    //on récupère la key dans source
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys)
 
   //On passe ensuite un filtre sur notre premier tableau
   return collection.filter(obj => {
     //On itère sur le nombre de key dans source
     for (let i = 0; i < sourceKeys.length; i++) {
 
       console.log(obj[sourceKeys[i]])
        //On vérifie si il n'y a pas de propriété correspondant à la key dans source alors on return false 
        //Ou si la valeur de la key est différente de celle du tableau passé alors on retourn null aussi
        if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
         return false;
           }
     }
     //Dans le cas contraire on return true
     return true
   })
 
   // Only change code above this line
 }
 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });