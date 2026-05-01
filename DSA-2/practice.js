// class HashTable {
//     constructor(size = 10) {
//         this.table = new Array(size);
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.table.length;
//     }

//     set(key, value) {
//         let index = this._hash(key);

//         if (!this.table[index]) {
//             this.table[index] = [];
//         }

//         this.table[index].push([key, value]);
//     }

//     get(key) {
//         let index = this._hash(key);
//         let bucket = this.table[index];

//         if (bucket) {
//             for (let [k, v] of bucket) {
//                 if (k === key) return v;
//             }
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this._hash(key);
//         let bucket = this.table[index];

//         if (bucket) {
//             this.table[index] = bucket.filter(([k]) => k !== key);
//         }
//     }
// }

// let ht = new HashTable();

// ht.set("name", "Ajay");
// ht.set("age", 21);

// console.log(ht.get("name")); // Ajay
// console.log(ht.get("age"));  // 21

// ht.remove("age");
// console.log(ht.get("age"));  // undefined



// class PriorityQueue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element, priority) {
//         const queueElement = { element, priority };

//         let added = false;

//         for (let i = 0; i < this.items.length; i++) {
//             if (queueElement.priority < this.items[i].priority) {
//                 this.items.splice(i, 0, queueElement);
//                 added = true;
//                 break;
//             }
//         }

//         if (!added) {
//             this.items.push(queueElement);
//         }
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     peek() {
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     print() {
//         console.log(this.items);
//     }
// }
// const pq = new PriorityQueue();

// pq.enqueue("A", 3);
// pq.enqueue("B", 1);
// pq.enqueue("C", 2);

// pq.print();
// console.log(pq.dequeue());



// class CircularQueue {
//     constructor(size) {
//         this.items = new Array(size);
//         this.size = size;
//         this.front = -1;
//         this.rear = -1;
//     }

//     isFull() {
//         return (this.front === (this.rear + 1) % this.size);
//     }

//     isEmpty() {
//         return this.front === -1;
//     }

//     enqueue(element) {
//         if (this.isFull()) {
//             console.log("Queue is full");
//             return;
//         }

//         if (this.front === -1) {
//             this.front = 0;
//         }

//         this.rear = (this.rear + 1) % this.size;
//         this.items[this.rear] = element;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return null;
//         }

//         let removed = this.items[this.front];

//         if (this.front === this.rear) {
//             this.front = -1;
//             this.rear = -1;
//         } else {
//             this.front = (this.front + 1) % this.size;
//         }

//         return removed;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }

//         let i = this.front;
//         let result = "";

//         while (true) {
//             result += this.items[i] + " ";
//             if (i === this.rear) break;
//             i = (i + 1) % this.size;
//         }

//         console.log(result);
//     }
// }


// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null
//     }
// }

// class stack{
//     constructor(){
//         this.top=null
//     }

//     push(val){
//         let node = new Node(val);
//         node.next= this.top;
//         this.top= node
//     }

//     pop(){
//         if(!this.top)return null

//         let ans = this.top.val;
//         this.top= this.top.next;
//         return ans
//     }
//     peek(){
//         if(this.top){
//             return this.top.val
//         }
//         else{
//             return null
//         }
//     }
//     isEmpty(){
//         return this.top===null
//     }

// }


// function validPara(val){
//     let Stack = new stack()
//     let map = {
//         '{':'}',
//         '[':']',
//         '(':')'
//     }

//     for(let i=0;i<val.length;i++){
//         if(map[val[i]]){
//             Stack.push(val[i])
        
//         }else{
//             let cur = Stack.pop();
//             console.log(cur,map[cur])
//             if(map[cur]!==val[i]){
//                 return false
//             }
//         }
//     }
//     return Stack.isEmpty()
    
// }


// console.log(validPara("{[()]}")); // true
// console.log(validPara("{[(])}")); // false
// console.log(validPara("((("));    // false


// class Node{
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class queue{
//     constructor(){
//         this.front= null;
//         this.rear=null;
//     }
//     push(val){
//         let node= new Node(val)
//         if(this.rear==null){
//             this.rear=node;
//             this.front=node;
//         }else{
//             this.rear.next= node;
//             this.rear=node;
//         }

//     }
//     shitf(){
//         if(this.front==null){
//             return null
//         }
//         let ans = this.front.val;
// this.front=this.front.next;
// if(this.front==null){
//     this.rear= null
// }
// return ans
//     }
//     peek(){
//         return this.front.val
//     }

//     isEmpty(){
//         return this.front==null
//     }
//     print(){
//         let cur = this.front;
//         if(cur==null)return "empty"
//         while(cur){
//             console.log(cur.val);
//             cur= cur.next
//         }
//     }
//     rev(){
//         let cur = this.front;
//         this.front=this.rear;
//         this.rear= cur

//         let prev = null;

//         while(cur){
            
//           let temp = cur.next;
//           cur.next=prev;
//           prev=cur;
//           cur=temp
//         }
//     }

// }

// const Queue = new queue();

// Queue.push(10);
// Queue.push(20);
// Queue.push(30);

// Queue.print();
// console.log("Dequeued:", Queue.shitf());
// console.log("Queue after dequeue:");
// Queue.print();

// Queue.rev();
// console.log("Queueueue after reverse:");
// Queue.print();

// Queue.push(100);
// Queue.rev();
// console.log("Single element reverse:");
// Queue.print();


// class queue{
//     constructor(val){
//         this.front= null;
//         this.rear = null;
//         this.size= 0;
//     }
//     push(val){
//         let newNode= new node(val);
//         if(!this.front&&!this.rear) this.rear=this.front=newNode;
//         else{
//             this.rear.next=newNode
           
//             this.rear= newNode;
//         }
//         this.size++;

//     }
//     shift(){
//         if(!this.front&&!this.rear)return "empty"
//         let ans = this.front.val;
//         if(this.size==1){
//             this.rear=this.front= null
//         }else{
//         this.front=this.front.next
//         }this.size--
//         return ans 

//     }
//     peek(){
//          if(this.front) return this.front.val
//     }
//     rev(){
//         if(!this.front&&!this.rear){
//             return "empty"
//         }
//         if(this.size==1)return this.front;
//         else{
//             let cur = this.front
//              let pre = null
//             while(cur){
//                 let temp =cur.next;
//                cur.next=pre
//                pre=cur;
//                cur=temp
//             }
//             [this.front,this.rear]=[this.rear,this.front]
//         }
//     }
// }
// class node{
//     constructor(val){
//         this.val=val;
//         this.next = null
//     }
// }

// let q = new queue();

// q.push(10);
// q.push(20);
// q.push(30);

// console.log("Peek:", q.peek());     
// console.log("Size:", q.size);       

// console.log("Shift:", q.shift());   
// console.log("Peek after shift:", q.peek()); 
// console.log("Size:", q.size);       

// console.log("Shift:", q.shift());   
// console.log("Shift:", q.shift());   
// console.log("Shift:", q.shift());   
// q.push(10);
// q.push(20);
// q.push(30);
// q.push(40);

// console.log("Before reverse:");
// let temp1 = q.front;
// while(temp1){
//     console.log(temp1.val);
//     temp1 = temp1.next;
// }

// q.rev();

// console.log("After reverse:");
// let temp2 = q.front;
// while(temp2){
//     console.log(temp2.val);
//     temp2 = temp2.next;
// }

// console.log("Front:", q.front.val);
// console.log("Rear:", q.rear.val);

// let count =0
// function bubblesort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let isSwapped = false
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                
//                 count++
//                 isSwapped=true
//             }
//         }
//         if(!isSwapped) break

//         console.log('outerloop')
//     }
//     return arr
// }

// //console.log(bubblesort([42, 7, 19, 3, 25, 14, 8, 31]),count)
// console.log(bubblesort([1,2,3,4,5]),count)


// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let min =i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[min]>arr[j]){
//                 min=j
//             }
//         }
//         [arr[min],arr[i]]=[arr[i],arr[min]]
//     }
//     return arr
// }
// console.log(selectionSort([42, 7, 19, 3, 25, 14, 8, 31]))


// function instertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let cur =arr[i];
//         let j=i-1;
//         while(j>=0&&arr[j]>cur){
//             arr[j+1]= arr[j]
//             j--
//         }
//         arr[j+1]=cur
        


//     }
//     return arr
// }

// console.log(instertionSort([42, 7, 19, 3, 25, 14, 8, 31]))


// function quickSort(arr){
//     if(arr.length==0)return arr
//     let left =[];
//     let right = [];
//     let pivot = arr[arr.length-1];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([42, 7, 19, 3, 25, 14, 8, 31]))

// function sort (arr){
//     if(arr.length<2)return arr
//     let mid = Math.floor(arr.length/2);

//     let left = sort(arr.slice(0,mid));
//     let right= sort(arr.slice(mid));
     
//     return merge(left,right);
// }

// function merge(left,right){
//     let i= 0;
//     let r=0;
//     let n= left.length;
//     let m = right.length;
//     let result=[]
//     while(i<n&&r<m){
//         if(left[i]<right[r]){
//             result.push(left[i])
//             i++
//         }else{
//             result.push(right[r])
//             r++;
//         }
//     }
// return [...result,...left.slice(i),...right.slice(r)];
// }

// console.log(sort([42, 7, 19, 3, 25, 14, 8, 31]))
//  let arr = [10, 4, 5, 1, 3];
// function heapSort(arr){
//     let n= arr.length;
//     for(let i=n-1;i>=0;i--){
//         heafipydown(arr,i,n);
//     }
//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heafipydown(arr,0,i)
//     }
//     return arr
// }

// function heafipydown(arr,i,n){
//     let largest =i;
//     let left = (2*i)+1;
//     let right = (2*i)+2;
//     if(left<n&&arr[left]>arr[largest]){
//         largest= left
//     }
//     if(right<n&&arr[right]>arr[largest]){
//         largest=right;
//     }
//     if(largest!= i){
//         [arr[largest],arr[i]]=[arr[i],arr[largest]];
//         heafipydown(arr,largest,n)
//     }
// }

// const sortedArray = heapSort(arr);
//         console.log(sortedArray);


// function revstring (str){
  
//     let stack = [];
//     let rev ='';
//     for(let i=0;i<=str.length;i++){
//     if(str.length===i||str[i]==" "){
//         while(stack.length!==0){
//             rev=rev+stack.pop();
//         }
//         if(str.length!==i){
//             rev=rev+" "
//         }
//     }else{

//         stack.push(str[i])
//     }
// }
    
    
//     return(rev)
// }

// console.log(revstring("AJAY KRISHNA"))








// let stack = [34, 3, 31, 98, 92, 23];


// function sortStack(stack){
//     let temp = [];

//     while(stack.length){
//         let cur = stack.pop();
//         console.log('outer')
    
//         while(temp.length&&cur>temp[temp.length-1]){
//             console.log('inner')
//             stack.push(temp.pop())
//         }
//         temp.push(cur)
//     }
//     return temp
// }





//console.log(sortStack(stack));

// function findpivot(arr,startindex,endindex){

//     let pivot = arr[endindex];
//     let pos= startindex-1;

//     for(let i=startindex;i<endindex;i++){
//         if(arr[i]<pivot){
//             pos++;
//             [arr[i],arr[pos]]=[arr[pos],arr[i]]
            
//         }
//     }
//      [arr[endindex],arr[pos+1]]=[arr[pos+1],arr[endindex]]
// return pos+1
// }


// function quickSort(arr,startindex,endindex){
//     if(startindex<endindex){
//     let pivot = findpivot(arr,startindex,endindex);

// quickSort(arr,startindex,pivot-1);
// quickSort(arr,pivot+1,endindex)
// return arr
// }


// }let nums = [8, 3, 1, 7, 0, 10, 2];
// let startIndex = 0;
// let endIndex = nums.length - 1;

// console.log(quickSort(nums, startIndex, endIndex));


// class CircularQueue{
// constructor(capacity)
// {
//     this.queue=new Array(capacity);
//     this.front=-1;
//     this.rear=-1;
//     this.length=0
//     this.capacity=capacity
// }
// isEmpty(){
//     return this.length==0
// }
// isfull(){
//     return this.capacity==this.length
// }

// equeue(val){
//     if(!this.isfull()){
//         this.rear=(this.rear+1)%this.capacity
//         this.queue[this.rear]=val
//         this.length++;
//         if(this.front==-1){
//             this.front=this.rear;

//         }
//     }
// }
// dequeue(){
//     if(this.isEmpty()) return null

//     let item = this.queue[this.front];
//     this.queue[this.front]=null;
//     this.front= (this.front+1)%this.capacity;
//     this.length--;
//     if(this.isEmpty()){
//         this.rear=-1
//         this.front=-1
//     }
// return item
// }

// peek(){
//     if(!this.isEmpty()){
//         return this.queue[this.front]
//     }
//     return null
// }


// }


// class HashTable{
//     constructor(size){
//         this.table=new Array(size);
//         this.size=(size)
//     }
//     _hash(key){
//         let index=0
//         for(let i=0;i<key.length;i++){
//             index=index+key.charCodeAt(i)
//         }
//         return index%this.size
//     }
//     set(key,val){
//         let index = this._hash(key);

//         if(!this.table[index]){
//             this.table[index]=[]
//         }


//        for(let pair of this.table[index]){
//         if(pair[0]==key){
//             pair[1]=val;
//         return;
//         }

//        }


//         this.table[index].push([key,val]);

//     };
//     get(key){
//         let index = this._hash(key)
//         for(let pair of this.table[index]){
//             if(pair[0]==key){
//                 return pair[1]
//             }
//         }
    
//     }

// remove(key){
//     let index = this._hash(key);
//     this.table[index]=this.table[index].filter((pair)=>pair[0]!=key);

//     if(this.table[index].length==0){
//         this.table[index]=undefined
//     }
// }


// display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }

// }

// let table = new HashTable(10);
// table.set("name", "ashika");
// table.set("age", 22);
// table.set("mane", "nandu");
// table.display();


// class HashTable{
//     constructor(size){
//         this.table= new Array(size);
//         this.size= size;
//         this.count=0
//     }
//     _hash(key){
//         let index= 0;
//         for(let i=0;i<key.length;i++){
//             index=index+key.charCodeAt(i);

//         }
//         return index%this.size
//     }
//     set(key,val){
//         if(this.count/this.size>0.7)
//         let index= this._hash(key);
//         while(this.table[index]!==undefined){
//             if(this.table[index][0]!==key){
//                 index=(index+1)%this.size;
//             }
//         }
//         this.count++
//         this.table[index]=[key,val]
//     }
//     get(key){
//         let index= this._hash(key);
//         while(this.table[index]!==undefined){
//             if(this.table[index][0]==key){
//                 return this.table[index][1]
//             }
//             index=(index+1)%this.size
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this._hash(key);
//         while(this.table[index]!==undefined){
//             if(this.table[index][0]==key){
//                 this.table[index]=undefined
//                 this.count--;
//             }
//             index= (index+1)%this.size;
//         }
        
//         return undefined
//     }
//        display() {
//         for (let i = 0; i < this.size; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }


//     reHash(){
//         let oldtable= this.table;
//         this.table= new Array(this.size*2);
//         for(let i of oldtable){
//             if(i!=undefined){
//                 this.set(i[0],i[1])
//             }
//         }

//     }
// }
// let ht = new HashTable(5);

// ht.set("name", "Ajay");
// ht.set("age", 25);
// ht.set("city", "Kochi");

// ht.display();

// console.log(ht.get("age")); // 25






// function quickSort(arr,startIndex,endIndex){
//     if(startIndex<endIndex){let pivotIndex = findPivot(arr,startIndex,endIndex);
//     quickSort(arr,startIndex,pivotIndex-1);
//     quickSort(arr,pivotIndex+1,endIndex);
//     return arr}
// }

// function  findPivot(arr,startIndex,endIndex){
//     let pivot = arr[endIndex];
//     let pos = startIndex-1;
//     for(let i=startIndex;i<endIndex;i++){
//         if(arr[i]<pivot){
//             pos++;
//             [arr[i],arr[pos]]=[arr[pos],arr[i]];
//         }

//     }
// }

// class Node{
//     constructor(val){
//         this.val =val;
//         this.next= null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null;
//         this.rear=null;
//         this.size=0
//     }
//     equeue(val){
//         let node = new Node(val)
//         if(this.size==0){
//             this.front=this.rear=node;

//         }else{
//             this.rear.next=node;
//             this.rear=node;
//         }

//         this.size++
//     }
//     dequeue(){
       
//         if(!this.size==0){
//             let val = this.front.val;
//            this.front=this.front.next
// this.size--

// if(this.size==0){
//     this.rear=this.front=null
// }
//             return val
//         }
// else{
//             return null
//         }

//     }
//     peek(){
//         return this.front.val
//     }
// }
// let q = new queue();

// q.equeue(10);
// q.equeue(20);
// q.equeue(30);

// console.log(q.peek());      // 10
// console.log(q.dequeue());   // 10
// console.log(q.peek());      // 20
// console.log(q.dequeue());   // 20
// console.log(q.dequeue());   // 30
// console.log(q.dequeue());   // null

// console.log(q.front);       // null
// console.log(q.rear);        // null
// console.log(q.size);        // 0

// class Node{
//     constructor(val){
//         this.val=val;
//         this.next =null
//     }
// }
// class stack{
//     constructor(){
//         this.top=null;
//         this.size=0;
//     }
//     push(val){

//         let node = new Node(val)
//         node.next=this.top;
//         this.top=node;
//         this.size++
//     }
//     pop(){
//         if(this.size==0) return "underflow"
//         let val = this.top.val;
//         this.top=this.top.next
//         this.size--
//         return val
//     }
//     peek(){
//         return (this.size!==0)?this.top.val :'empty'
//     }
// }
// let s = new stack();

// console.log(s.peek()); // empty
// console.log(s.pop());  // underflow

// s.push(10);
// s.push(20);
// s.push(30);

// console.log(s.peek()); // 30
// console.log(s.pop());  // 30
// console.log(s.peek()); // 20
// console.log(s.pop());  // 20
// console.log(s.pop());  // 10
// console.log(s.pop());  // underflow
// console.log(s.peek()); // empty
// console.log(s.size);   // 0

class Node{
    constructor(val){
        this.val =val;
        this.next= null
    }
}
class queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0
    }
    equeue(val){
        let node = new Node(val)
        if(this.size==0){
            this.front=this.rear=node;
            node.next=this.front
        }else{
            this.rear.next=node;
            this.rear=node;
            node.next=this.front
        }

        this.size++
    }
    dequeue(){
       
        if(!this.size==0){
            let val = this.front.val;
           this.front=this.front.next
           this.rear.next=this.front;
this.size--

if(this.size==0){
    this.rear=this.front=null
}
            return val
        }
else{
            return null
        }

    }
    peek(){
        return this.front.val
    }
}
let q = new queue();

q.equeue(10);
q.equeue(20);
q.equeue(30);

console.log(q.peek());      // 10
console.log(q.dequeue());   // 10
console.log(q.peek());      // 20
console.log(q.dequeue());   // 20
console.log(q.dequeue());   // 30
console.log(q.dequeue());   // null

console.log(q.front);       // null
console.log(q.rear);        // null
console.log(q.size);        // 0
