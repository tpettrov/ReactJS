/**
 * Created by apetrov on 6/23/2017.
 */
export default class Helpers {

 static appendToArray (value, array) {

     array.push(value)

     return array

 }

 static prependToArray(value, array) {

     array.unshift(value)

 }

 static removeFromArray(value, array) {

     let index = array.indexOf(value);

     if (index !== -1) {

         array.splice(index, 1)

     }

     return array

 }

}