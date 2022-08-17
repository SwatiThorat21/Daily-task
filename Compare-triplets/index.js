
function compareTriplets(a,b){
    
let Alice = [a,a,a];
let Bob = [b,b,b];
let i;
if( i >= 1 & i <= 100){
if(a[i]>b[i]){
    return Alice+1;
}
else if(a[i]<b[i]){
    return Bob+1;
}
else if(a[i]==b[i]){
    return 0;
}
}

}

console.log(compareTriplets([1,2,3],[3,2,1]))


