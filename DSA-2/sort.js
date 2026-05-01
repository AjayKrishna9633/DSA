//let arr= [3,5,7,2,6];

// function sortBubble(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j =i;j<arr.length-1-i;i++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(sortBubble(arr))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min =j
//             }
//         }
//         [arr[i],arr[min]]=[arr[min],arr[i]]
//     }
   
//     return arr
// }

// console.log(selectionSort(arr))

// function bubbleSorting(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let flag=0;
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 flag=1;
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//         if(flag==0){
//             break;
//         }
//     }
//     return arr
// }

// let arr=[4,2,34,5,77,4,3,87,6,5];
// console.log(bubbleSorting(arr));

// function bubblesort(arr){
//     for(let  i= 0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }


// function selectionSort(arr){

//     for(let  i=0;i<arr.length-1;i++){
// let min =i;
// for(let j =i+1;j<arr.length;j++){
//     if(arr[j]<arr[min]){
//         min=j
//     }
// }
// [arr[min],arr[i]]=[arr[i],arr[min]]


//     }



// return arr

// }

// function insertion(arr){
// for(let i=1;i<arr.length-1;i++){
//     let temp= arr[i];
//     let j =i-1;
//     while(j>=0&&temp<arr[j]){
//         arr[j+1]= arr[j];
//         j--
//     }
//     arr[j+1]=temp;
// }
// return arr
// }

// function sort(arr){
//     if(arr.length<=1)return arr
//     let mid = Math.floor(arr.length/2);
//     let left= sort(arr.slice(0,mid));
//     let right =  sort(arr.slice(mid));
//      return merge(left,right)
// }

// function merge(left,right){
//     let i=0,j=0;
//     let res =[]
//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             res.push(left[i++]);
//         }else{
//             res.push(right[j++])
//         }
//     }
//     return [...res,...left.slice(i),...right.slice(j)]
// }




// let arr=[4,2,34,5,77,4,3,87,6,5];

// console.log(sort(arr))

// function bubblesort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let isSwapped= false;
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//             isSwapped= true
//         }

//         }
//         if(!isSwapped){
//             return arr
//         }
//     }
//     return arr
// }

//console.log(bubblesort([1,2,34,5,77,4,3,87,6,5]))
// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min = j
//             }
//         }
//         [arr[min],arr[i]]=[arr[i],arr[min]]
//     }
//     return arr
// }
// console.log(selectionSort([1,2,34,5,77,4,3,87,6,5]))

// function instertionSort(arr){
//     for(let i =1;i<arr.length;i++){
//         let pre = arr[i];
//         let j = i-1;
//         while(j>0&&pre<=arr[j]){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=pre;

//     }
//     return arr
// }
// let arr=[1,2,3,45,4,5,5,3,2]
// console.log(instertionSort(arr));   

// function quickSort(arr){
//     if(arr.length<2)return arr

//     let pivot = arr[arr.length-1];
//     let left =[];
//     let right =[];
//     for(let x=0; x<arr.length-1;x++){
//         if(arr[x]<pivot){
//             left.push(arr[x]);
//         }else{
//     right.push(arr[x])
//         }
    
//     }
    
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// function Sort(arr){
// if(arr.length<2)return arr;
// let mid = Math.floor(arr.length/2);

// let left = Sort(arr.slice(0,mid));
// let right =Sort(arr.slice(mid));
// return merge(left,right);
// }

// function merge(left,right){
//     let i =0;j=0;
//     let result=[]

//     while(i<left.length&&j<right.length){
//         if(left[i]<right[j]){
//             result.push(left[i])
//             i++
//         }else{
            
//             result.push(right[j])
//             j++;
//         }

//     }
//     return[...result,...left.slice(i),...right.slice(j)];
// }

// let arr=[1,2,3,45,4,5,5,3,2]
// console.log(Sort(arr));   

