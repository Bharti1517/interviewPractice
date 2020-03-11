
var a = [{name:'xyz',school:"MSD"},{name:'abc',school:"MSD"},{name:'def',school:"MSD"}]
// var b = [{name:'xyz'},{name:'abc'},{name:'def'}]
function compare(a, b) {
  const bandA = a.name
  const bandB = b.name
console.log('for = >', bandA , bandB);
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  console.log(comparison);
  return comparison;
}
console.log(a.sort(compare));
