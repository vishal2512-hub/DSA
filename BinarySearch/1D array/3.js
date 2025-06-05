function Upperbound(arr , N ,x) {
   
    for(let i=0; i<N; i++) {
       if(arr[i] > x) {
        return i;
       }
    }
}

let N = 6, arr =[1, 2, 2, 3], x=2
console.log(Upperbound(arr, N , x));

