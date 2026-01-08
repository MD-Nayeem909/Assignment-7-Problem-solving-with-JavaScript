// function filterEven(arr) {
//     let evenArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i]);
//         }
//     }
//     return evenArr;
// }
// console.log(filterEven([1, 2, 3, 4, 5, 6]));

function filterEven(arr) {
    let num = [];
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));