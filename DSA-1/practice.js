// // function array(arr,k){
// //     let n =arr.length-1
// // while(n!=0){
// //     arr
// // }
// // }

// function head (val){
//     this.head=val
//     this.size=0
// }
// function node(val){
//     this.val=val
//     this.next=null
// }

// let mylist = new head();

// head.prototype.print=function(){
//     let cur=this.head;
//     while(cur){
//         console.log(cur.val)
//         cur=cur.next
//     }
// }

// head.prototype.addHead=function(val){
//     let newNode= new node(val);
    
//     newNode.next=this.head;
//     this.head=newNode
//     this.size++
// }

// head.prototype.addTail=function(val){
//      let newNode=new node(val)


//     if(!this.head) this.head=newNode
//     let cur = this.head;
//     while(cur.next){
//         cur=cur.next
//     }
   
// this.size++
//     cur.next=newNode;
// }



// head.prototype.addIndex=function(val,index){
//     let newNode = new node(val)
//      if(!this.head) this.head=newNode
//     let cur = this.head;

//     for(let i=0;i<index;i++){
//         cur=cur.next;
//     }
//     newNode.next=
// cur.next=newNode;






// }

// mylist.addHead(3);
// mylist.addHead(5);
// mylist.addTail(4);
// mylist.addTail(1);
// mylist.addTail(2)
// mylist.print()





// function rec (arr,val,left=0,right=arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)

//         if(arr[mid]==val)return mid;


//     if(arr[mid]<val){
//       return  rec(arr,val,left=mid+1,right)
//     }else{
//       return  rec(arr,val,left,right=mid-1)
//     }






// }

// console.log(rec([1,2,3,3,4,4,4,5,6,8],5))


// function flat (arr){
//     let result =[]
//     for(let i=0;i<arr.length;i++){
//          if(Array.isArray(arr[i])){
//             result=result.concat(flat(arr))
//          }else{
//             result.push(arr[i])
//          }
//     }
//     return arr
// }

// console.log(flat([1, [2, [3, 4], 5], 6]))


//  function flatten(arr){
//     let result=[];
//     for(let x of arr){
//         if(Array.isArray(x)){
//             let multiarray=flatten(x);
//             for(let value of multiarray){
//                 result.push(value);
//             }
//         }else{
//             result.push(x);
//         }
//     }
//     return result;
// }



// function flatten(arr){
//     let result =[];

//     for(let x of arr){
//         if(Array.isArray(x)){
//      let innerarr= flatten(x);
//      for(let i of innerarr){
//          result.push(i)
//      }
//         }else{
//             result.push(x)
//         }

//     }
//     return result
// }

// console.log(flatten([[1, [2, 3], [4, [5, 6]], 7]])) 

// function fib(n){
//     if(n==0) return 0;
//     if(n==1) return 1;

//      return fib(n-1)+fib(n-2)
// }

// console.log(fib(5)) 


// function sumArray(arr,i=0){
    
//     if(i<arr.length){
//          return sumArray(arr,i+1)+arr[i]
//     }
//   return 0
// }

// console.log(sumArray([1,2,3,4,5,712,10]));


// function isPrime(val,i=2){
//     if(val<2)return false
//     let end = Math.sqrt(val);
// if(i>end)return true

    

//     if(val%i==0){
//         return false

//     }else{
//       return  isPrime(val,i+1)
//     }

    
// }
// console.log(isPrime(9))


// function rev(arr){
    
//     if(arr.length<=1){
//         return arr
//     }
//     return rev(arr.slice(1))+arr[0]
// }

// console.log(rev('hello'))

// function recursiveFibonacci(n){
//     if(n<2){
//         return n
//     } 
//     return recursiveFibonacci(n-1)+recursiveFibonacci(n-2);
// }

// console.log(recursiveFibonacci(6));

