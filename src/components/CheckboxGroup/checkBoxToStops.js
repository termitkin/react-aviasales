export function checkBoxToStops (obj) {

  let arr = [];

  for (let key in obj) {
    if ( !obj[key] === false ) {
      arr.push(key);
    }
  }
  
  // console.log(arr);
  
  let arr2 = [];
  
  arr.forEach( function(el) {
    let check = el.replace(/(checkBox)([0-9]*)/i, '$2');
    if ( check.length > 0 ) {
      arr2.push(check);
    }
    // arr2.push();
  })

  return arr2;
}