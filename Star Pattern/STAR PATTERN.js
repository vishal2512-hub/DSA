// function boxstarpatterb(rows, columns) {
//     for(let i=0;i<rows;i++) {
//         console.log("* ".repeat(rows));
//     }
// }
// boxstarpatterb(5,5)

// function star2(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log("*".repeat(i));
//   }
// }
// star2(5);

// function star3(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += j;
//       }
//       console.log(row);
//     }
//   }
//   star3(5);

//   function star4(n) {
//     for (let i = 1; i <= n; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += i;
//       }
//       console.log(row);
//     }
//   }
//   star4(5);

// function star5(n) {
//     for(let i=0;i<n;i++) {
//         console.log("*".repeat(n-i));
//     }
// }
// star5(5)

// function star6(n) {
//     for(let i=0;i<n;i++) {
//         let num='';
//         for(let j=1;j<n-i;j++) {
//             num+=j;
//         }
//         console.log(num);
//     }
// }
// star6(6)

// function star7(n) {
//     for(let i=1;i<=n;i++) {
//         console.log(" ".repeat(n-i)+"*".repeat(i)+"*".repeat(i-1));
//     }
// }
// star7(5)

// function star8(n) {
//     for(let i=0;i<n;i++) {
//         console.log(" ".repeat(i)+"*".repeat(2*(n-i)-1));
//     }
// }
// star8(5)

// function star9(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//   }
// }
// star9(6);

// function star10(n) {
//     for(let i=1;i<n;i++) {
//         console.log("*".repeat(i));
//     }
//     for(let i=n;i >=1;i--) {
//         console.log("*".repeat(i));
//     }
// }
// star10(5)

// function star11(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//           // Alternating between 1 and 0 based on column index
//           row += ((i+j) % 2 === 0) ? '1' : '0';
//         }
//         console.log(row);
//       }
// }
// star11(6);

// function star12(n) {
//    for(let i=0;i<=n;i++) {
//     let left ='';
//     let right = '';
//     for(let j=1;j<=i;j++) {
//         left+=j;
//         right = j+ right
//     }
//     space=' '.repeat(2*(n-i))
//     console.log(left +space + right);
    
// }
// }
// star12(4)


// function star13(n) {
//     let num=1;
//     for(let i=0;i<n;i++) {
//         let row='';
//         for(let j=0;j<i;j++) {
//             row+=num+' ';
//             num++;
//         }
//         console.log(row); 
//     }
// }
// star13(6)


// function hollow(n) {
//     for(let i=0;i<n;i++) {
//         console.log("*".repeat(n));
//     }
// }
// hollow(5)


 