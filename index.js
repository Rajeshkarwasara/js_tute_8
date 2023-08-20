let index=[1,3 ,5 ,3 ,6 ,3]

let l=index.length;
console.log(l)

let sum=index[0]+index[1]+index[2]+index[3]+index[4]+index[5]
console.log(sum)
let avg=sum/index.length
console.log(avg)
let sum3=0;
let sum2=[34,45,5645,565,44,54,54,5478,8,8,78,78,78,45,21,21,2,54,8,87,8,12,58,8,]
console.log(sum2.length)


// break continue
// let sum2=[34,45,5645,565,44,54,54,5478,8,8,78,78,78,"r",45,21,21,2,54,8,87,8,12,58,8,]

// for(let i=0; i<=sum2.length; i++){
//     console.log(i)

//     if(typeof(sum2[i])==="string")
//     break;
//   // continue;
    
// }

for(let i=0; i<sum2.length; i++){
// sum3 += sum2[i];
   sum3=sum3+sum2[i];
   
}
console.log(sum3)













