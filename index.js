/**
 *  function that would multiply and then divide numbers
 *   multiplyAndDivide(x)(y)(z)
 * 
 *   example multiplyAndDivide(2)(2)(2) should return 2
 * x*y / z
 * 
 */

function multOut (x){
    function multIn (y){
        function divIn (z){
           return (x * y) / z
        }
        return divIn
    }
    return multIn
}

console.log('result', multOut(2)(2)(2));