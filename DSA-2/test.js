// // function HashTable(){
// //     this.table=new Array(5);
// // }

// // HashTable.prototype._hash=function(key){
    
    
// //     return key%5;
// // }

// // HashTable.prototype.set=function(key,val){
// // let index = this._hash(key)
// // if(!this.table[index]) this.table[index]=[]

// // this.table[index].push([key,val])
// // }

// // HashTable.prototype.get=function(key){
// //     let index =this._hash(key);
// //  for(let [x,y] of this.table[index]){
// //     if(x==key)return y
// //  }
// //  return undefined
// // }

// // let hash1 = new HashTable();
// // hash1.set(10,40);
// // hash1.set(20,50);

// // console.log(hash1.get(10))



// // function bubblesort(arr){
// //     let count =0
// //     for(let i =0;i<arr.length-1;i++){
// //         let  isSwapped = false
// //         for(let j=0;j<arr.length-1-i;j++){

// //             if(arr[j]>arr[j+1]){
// //                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
// //                 count ++
// //                 isSwapped=true
// //             }
// //         }
// //         if(!isSwapped)return arr
// //         console.log(arr)
// //     }
// //     console.log(count)
// //     return arr
// // }

// // console.log(bubblesort([4, 63, 2, 7, 1, 8]))



// // function selectionSort(arr){
  
// //    for(let i=0;i<arr.length-1;i++){
    
// //     let min  = i
// //     for(let j=i+1;j<arr.length;j++){
        
// //         if(arr[j]>arr[min]){
// //            min=j 
// //         }
// //     }
// //     [arr[min],arr[i]]=[arr[i],arr[min]]
// //    }

// //    return arr
// // }

// // console.log(selectionSort([4, 63, 2, 7, 1, 8]))


// // function instertionSort(arr){
// // for(let i=0;i<arr.length;i++){
// //     let cur =arr[i];
// //     let j =i-1;
// //     while(j>=0&&cur<arr[j]){
// //         arr[j+1]=arr[j];
// //         j--;
// //     }
// //     arr[j+1]=cur
// // } 
// // return arr
// // }

// // console.log(instertionSort([4, 63, 2, 7, 1, 8]))


// // function queue(){
// //     this.queue=[];
// //     this.size=10
// // }

// // queue.prototype.equeue=function(val){
// //     this.queue.push(val)
// // }

// // queue.prototype.peek=function(){
// //    return this.queue[0]
// // }
// // queue.prototype.dequeue= function(){
// //     return this.queue.shift()
// // }

// // let myqueue = new queue();

// // function Node(val){
// //     this.val=val
// //     this.next=null;

// // }

// // function qu(val){
    
// //     this.size=0;
// //     this.rear=null
// // }
// // qu.prototype.isEmpty=function(){
// //     return (this.rear===null)
// // }
// // qu.prototype.enqueue=function(val){
// //     let newNode= new Node(val)
// //     if(this.isEmpty()){
// //      newNode.next= newNode;
// //         this.rear=newNode;
// //     }else{
// //         newNode.next=this.rear.next;
// //         this.rear.next= newNode;

// //         this.rear= newNode;

// //     }
// //     this.size++;
// // }

// // qu.prototype.dequeue=function(){
// //  if (this.isEmpty()) return null;
// //     let front = this.rear.next;
// //     let val = front.val;
   
// //     if(this.rear==front) this.rear= null
// //     else{
// //         this.rear.next= front.next
// //     }

// //     this.size--;
// //     return val

// // }

// // qu.prototype.peek=function(){
// // return this.isEmpty()?null:this.rear.next.val
// // }

// // qu.prototype.display=function(){
   
// //     if(this.isEmpty())return null
// //      let front= this.rear.next;
// //     let res = []
// //     do{
// //         res.push(front.val);
// //         front=front.next;
// //     }while(front!==this.rear.next)
    
// //         return res
// // }

// // let q = new qu();




// // console.log("--- Test 1: Empty State ---");
// // console.log("Peek:", q.peek()); // Expected: null
// // console.log("Display:", q.display()); // Expected: null

// // console.log("\n--- Test 2: Enqueueing ---");
// // q.enqueue("Keyboard");
// // q.enqueue("Mouse");
// // q.enqueue("Monitor");
// // console.log("Display:", q.display()); // Expected: ["Keyboard", "Mouse", "Monitor"]
// // console.log("Peek:", q.peek()); // Expected: "Keyboard"

// // console.log("\n--- Test 3: Dequeueing ---");
// // console.log("Removed:", q.dequeue()); // Expected: "Keyboard"
// // console.log("New Peek:", q.peek()); // Expected: "Mouse"
// // console.log("New Display:", q.display()); // Expected: ["Mouse", "Monitor"]

// // console.log("\n--- Test 4: Single Item Reset ---");
// // q.dequeue(); // Removes Mouse
// // q.dequeue(); // Removes Monitor
// // console.log("Rear after empty:", q.rear); // Expected: null
// // console.log("Display after empty:", q.display()); // Expected: null


// // function quickSort(arr){

// //     if(arr.length<=1){
// //         return arr
// //     }
// //     let pvit = arr[Math.floor(arr.length/2)];
    
// //     let left =[];
// //     let right =[];

// //     for(let i=0;i<arr.length-1;i++){
// //         if(arr[i]<pvit){
// //             left.push(arr[i])
// //         }else{
// //             right.push(arr[i])
// //         }
// //     }

// //     return [...quickSort(left),pvit,...quickSort(right)]
// // }


// // console.log(quickSort([4, 2, 5, 2, 3, 4, 1]))

// // function mergeSort(arr){
// //     if(arr.length<=1)return arr
// //     let mid = Math.floor(arr.length/2);
// //     let left=  mergeSort(arr.slice(0,mid));
// //     let right = mergeSort(arr.slice(mid));

// //     return  merge(left,right)

// // }


// // function merge(left,right){
// //     let i=0;
// //     let res =[]
// //     let j=0;
// //     while(i<left.length&&j<right.length){
// //         if(left[i]<right[j]){
// //             res.push(left[i]);
// //             i++
// //         }else{
// //             res.push(right[j]);
// //             j++
// //         }
// //     }

// //     return [...res,...left.slice(i),...right.slice(j)]
// // }
// // console.log(mergeSort([4, 2, 5, 2, 3, 4, 1]))

//  let arr = [4, 2, 5, 2, 3, 4, 1]
//  let str = "bcat"
// // function bubblesort(arr){
// //     for(let i=0;i<arr.length-1;i++){
// //         let isSwapped= false;
// //         for(let j=0;j<arr.length-1-i;j++){
// //             if(arr[j]>arr[j+1]){
// //                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
// //                 isSwapped =true
// //             }
           

// //         }
// //          if(!isSwapped) break
// //     }
// // return arr 
// // }


// //console.log(bubblesort(arr))


// // function selectionSort(arr){
// //     for(let i=0;i<arr.length-1;i++){
// //         let min =i
// //         for(let j =i+1;j<arr.length;j++){
// //             if(arr[j]<arr[min]) min=j
// //         }
// //         [arr[i],arr[min]]=[arr[min],arr[i]]
// //     }
// //     return arr
// // }


// // console.log(selectionSort(arr))

// // function instertionSort(arr){
// //      arr =(typeof(arr)=="string")?arr.split(""):arr 
// //    for(let i=0;i<arr.length;i++){
// //     let min = arr[i];
// //     j=i-1;
// //     while(j>=0&&min<arr[j]){
// //         arr[j+1]= arr[j]
// //         j--
// //     }
// //     arr[j+1]= min
// //    }
// //    return arr
// // }

// //console.log(instertionSort(str))


// // function quickSort(arr){

// //     if(arr.length<=1) {return arr}
// //     let pivot  = arr[arr.length-1];

// //     let left = [];
// //     let right = [];
// //     for(let i=0;i<arr.length-1;i++){
// //         if(arr[i]<=pivot){
// //             left.push(arr[i])
// //         }else{ 
// //             right.push(arr[i]);
// //         }
// //     };


// // return[...quickSort(left),pivot,...quickSort(right)]

// // }

// //quick sort with median padikkann innde 

// // function quickSort(arr, low = 0, high = arr.length - 1) {
// //     if (low < high) {
// //         let pivotIndex = partition(arr, low, high);

// //         quickSort(arr, low, pivotIndex - 1);
// //         quickSort(arr, pivotIndex + 1, high);
// //     }
// //     return arr;
// // }

// // function partition(arr, low, high) {
// //     // 🔥 Step 1: get median index
// //     let medianIndex = getMedianIndex(arr, low, high);

// //     // 🔥 Step 2: move median to end (make it pivot)
// //     [arr[medianIndex], arr[high]] = [arr[high], arr[medianIndex]];

// //     let pivot = arr[high];
// //     let i = low - 1;

// //     // 🔥 Step 3: normal partition
// //     for (let j = low; j < high; j++) {
// //         if (arr[j] < pivot) {
// //             i++;
// //             [arr[i], arr[j]] = [arr[j], arr[i]];
// //         }
// //     }

// //     // place pivot in correct position
// //     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

// //     return i + 1;
// // }

// // function getMedianIndex(arr, low, high) {
// //     let mid = Math.floor((low + high) / 2);

// //     let a = arr[low];
// //     let b = arr[mid];
// //     let c = arr[high];

// //     if ((a <= b && b <= c) || (c <= b && b <= a)) return mid;
// //     if ((b <= a && a <= c) || (c <= a && a <= b)) return low;
// //     return high;
// // }

// // console.log(quickSort(arr))


// // function mergeSort(arr){
// //     if(arr.length<=1) return arr;

// //     let mid = Math.floor(arr.length/2)
// //     let left = mergeSort(arr.slice(0,mid));
// //     let right = mergeSort(arr.slice(mid));

// //     return merge(left,right)

// // }


// // function merge (left,right){
// //     let i=0;
// //     let j=0;
// //     let result=[]
// //     while (i<left.length&&j<right.length) {
// //         if(left[i]<right[j]){
// //             result.push(left[i])
// //             i++
// //         }else{
// //             result.push(right[j]);
// //             j++
// //         }
// //     }
// //     return [...result,...left.slice(i),...right.slice(j)]
// // }


// // console.log(mergeSort(arr))



// // function HashTable(){
// //     this.table = [];
// //     this.size = 10;
// // }

// // HashTable.prototype._hash=function(val){
// //     let index =0;
// //     let temp = val.toString();
  
// //    for(let i=0;i<temp.length;i++){
// //     index=index+temp.charCodeAt(i);
// //    }
// //    return index%10
// // }

// // HashTable.prototype.set= function(key,val){

// // let index = this._hash(key);
// // if(!this.table[index])this.table[index]=[];

// // this.table[index].push([key,val])


// // }
// // HashTable.prototype.get=function(key){
// //     let index = this._hash(key);
// //     let bucket;
// //     if(this.table[index])bucket=this.table[index];

// //     for(let [x,y] of bucket){
// //         if(x==key){
// //             return y
// //         }
// //     }
// // }
// // HashTable.prototype.delete=function(key){
// // let index=this._hash(key);
// // let bucket = this.table[index];

// // this.table[index]= bucket.filter(([x,y])=> x!==key)
// // //console.log(bucket)
// // }
// // let  myTable =  new HashTable()

// // myTable.set("name","ajay");
// // myTable.set('mane',"alen");
// // console.log(myTable.get('name'))
// // myTable.delete('name')
// // console.log(myTable.table)



// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size);
//         this.size = size;
//         this.DELETED = "DELETED"; // marker
//     }

//     _hash(key) {
//         let hash = 0;
//         let str = key.toString();

//         for (let i = 0; i < str.length; i++) {
//             hash += str.charCodeAt(i);
//         }

//         return hash % this.size;
//     }

//     // 🔹 Insert / Set
//     set(key, value) {
//         let index = this._hash(key);

//         while (
//             this.table[index] !== undefined &&
//             this.table[index] !== this.DELETED &&
//             this.table[index][0] !== key
//         ) {
//             index = (index + 1) % this.size;
//         }

//         this.table[index] = [key, value];
//     }

//     // 🔹 Get
//     get(key) {
//         let index = this._hash(key);
//         let start = index;

//         while (this.table[index] !== undefined) {
//             if (
//                 this.table[index] !== this.DELETED &&
//                 this.table[index][0] === key
//             ) {
//                 return this.table[index][1];
//             }

//             index = (index + 1) % this.size;

//             if (index === start) break; // avoid infinite loop
//         }

//         return undefined;
//     }

//     // 🔹 Delete
//     delete(key) {
//         let index = this._hash(key);
//         let start = index;

//         while (this.table[index] !== undefined) {
//             if (
//                 this.table[index] !== this.DELETED &&
//                 this.table[index][0] === key
//             ) {
//                 this.table[index] = this.DELETED;
//                 return true;
//             }

//             index = (index + 1) % this.size;

//             if (index === start) break;
//         }

//         return false;
//     }

//     // 🔹 Display
//     print() {
//         console.log(this.table);
//     }
// }

// let ht = new HashTable();

// ht.set("name", "ajay");
// ht.set("mane", "alen"); // collision likely

// console.log(ht.get("name")); // ajay
// console.log(ht.get("mane")); // alen

// ht.delete("name");

// console.log(ht.get("name")); // undefined
// console.log(ht.get("mane")); // still works ✅

// ht.print();

// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size);
//         this.size = size;
//         this.DELETED = "DELETED";
//     }

//     _hash(key) {
//         let hash = 0;
//         let str = key.toString();

//         for (let i = 0; i < str.length; i++) {
//             hash += str.charCodeAt(i);
//         }

//         return hash % this.size;
//     }

//     // 🔹 Insert
//     set(key, value) {
//         let index = this._hash(key);
//         let i = 1;

//         while (
//             this.table[index] !== undefined &&
//             this.table[index] !== this.DELETED &&
//             this.table[index][0] !== key
//         ) {
//             index = (index + i * i) % this.size;
//             i++;
//         }

//         this.table[index] = [key, value];
//     }

//     // 🔹 Get
//     get(key) {
//         let index = this._hash(key);
//         let i = 1;

//         while (this.table[index] !== undefined) {
//             if (
//                 this.table[index] !== this.DELETED &&
//                 this.table[index][0] === key
//             ) {
//                 return this.table[index][1];
//             }

//             index = (index + i * i) % this.size;
//             i++;
//         }

//         return undefined;
//     }

//     // 🔹 Delete
//     delete(key) {
//         let index = this._hash(key);
//         let i = 1;

//         while (this.table[index] !== undefined) {
//             if (
//                 this.table[index] !== this.DELETED &&
//                 this.table[index][0] === key
//             ) {
//                 this.table[index] = this.DELETED;
//                 return true;
//             }

//             index = (index + i * i) % this.size;
//             i++;
//         }

//         return false;
//     }

//     print() {
//         console.log(this.table);
//     }
// }


// let str ='Ajay';

// function rev(str){
//     let st=""
//     let stack =[];
//     for(let i=0;i<str.length;i++){
//         stack.push(str[i])
//         st=stack.pop()+st
//     }
// return st
// }

// console.log(rev(str))

// function bubblesort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let isSwapped = false
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             isSwapped=true
//             }
//         }
//         if(!isSwapped) break
//     }
//     return arr
// }

// console.log(bubblesort([9, 7, 5, 3, 1, 2, 4, 6, 8]))


// function selectionSort(arr){
    
//     for(let i=0 ;i<arr.length-1;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min =j
//             }
//         }
//         [arr[min],arr[i]]=[arr[i],arr[min]]
//     }
// return arr
// }

// console.log(selectionSort([5, 3, 8, 4, 2]))


// function instertionSort(arr){
//     let n = arr.length;
//     for(let i=1;i<n;i++){
//        let cur = arr[i];
//        let prev = i-1;
//        while(arr[prev]>cur&&prev>=0){
//         arr[prev+1]=arr[prev];
//         prev--
//        } 
//        arr[prev+1]=cur
//     }
//     return arr
// }

// console.log(instertionSort([5, 3, 8, 4, 2]))

// function quickSort(arr){
//     let n=arr.length
    
//     if(n==0)return arr
//         let pivot = arr[n-1]
//         let left=[];
//         let right= [];
//         for(let i=0;i<arr.length-1;i++){
//             if(pivot<arr[i]){
//                 left.push(arr[i]);
//             }else{
//                 right.push(arr[i]);
//             }
//         }
//         return[...quickSort(left),pivot,...quickSort(right)]
// }


// console.log(quickSort([5, 3, 8, 4, 2]))

// function mergeSort(arr){

//     if(arr.length<=1)return arr
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left,right)
// }

// function merge(left,right){
//     let n =left.length;
//     let m=right.length;
// let result=[]
// let  i=0,j=0;
// while(i<n&&j<m){
//     if(left[i]<right[j]){
//         result.push(left[i++])
//     }else{
//         result.push(right[j++])
//     }
// }
// return [...result,...left.slice(i),...right.slice(j)]
// }


// console.log(mergeSort([5, 3, 8, 4, 2]))

// function HashTable(){
//     this.table=new Array(10);
    
// }

// HashTable.prototype._hash=function(key){
//     let index = 0;
//     for(let i=0;i<key.length;i++){
//         index=index+key.charCodeAt(i)
//     }
//     return index%10;
// }

// HashTable.prototype.set=function(key,val){
//     let index = this._hash(key);
    
//     if(!this.table[index])this.table[index]=[];


//     this.table[index].push([key,val])
// }
// HashTable.prototype.get= function(key){
//     let index  = this._hash(key);
//     if(this.table[index]){
//         for(let [x,y]of this.table[index]){
//             if(x==key) return y
//         }
//     }
// }
// HashTable.prototype.traversal=function(){
//     for(let i=0;i<this.table.length;i++){
//         let bucket = this.table[i];
//         if(bucket){
//             for(let [x,y] of bucket){
//                 console.log(x,y)
//             }
//         }
//     }
// }

// HashTable.prototype.delete=function(key){
// let index = this._hash(key);
// let bucket = this.table[index];
// this.table[index] = this.table[index].filter(([x,y])=>x!==key)
// }
// let myTable = new HashTable()

// myTable.set("name","Ajay");
// myTable.set("naem","Akhil");
// myTable.set("hero",'iking')
// console.log(myTable.get("name"));
// myTable.delete('name')
// myTable.traversal()


// let minstack = function(){
//     this.s= []
// }

// minstack.prototype.push=function(val){
//     if(this.s.length==0){
//         this.s.push([val,val])
//     }else{
//         let minval = Math.min(val,this.s[this.s.length-1][1]);
//         this.s.push([val,minval]);
//     }
// }

// minstack.prototype.top=function(){
//     return this.s[this.length-1][0]
// }

// minstack.prototype.minval=function(){
//     return this.s[this.length-1][1]
// }
// let mystack = new minstack()
// mystack.push(5)
// mystack.push(3)
// mystack.push(7)
// console.log(mystack)


