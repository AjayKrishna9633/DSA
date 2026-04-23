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


class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

class stack{
    constructor(){
        this.top=null
    }

    push(val){
        let node = new Node(val);
        node.next= this.top;
        this.top= node
    }

    pop(){
        if(!this.top)return null

        let ans = this.top.val;
        this.top= this.top.next;
        return ans
    }
    peek(){
        if(this.top){
            return this.top.val
        }
        else{
            return null
        }
    }
    isEmpty(){
        return this.top===null
    }

}


function validPara(val){
    let Stack = new stack()
    let map = {
        '{':'}',
        '[':']',
        '(':')'
    }

    for(let i=0;i<val.length;i++){
        if(map[val[i]]){
            Stack.push(val[i])
        
        }else{
            let cur = Stack.pop();
            console.log(cur,map[cur])
            if(map[cur]!==val[i]){
                return false
            }
        }
    }
    return Stack.isEmpty()
    
}


console.log(validPara("{[()]}")); // true
console.log(validPara("{[(])}")); // false
console.log(validPara("((("));    // false


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class queue{
    constructor(){
        this.front= null;
        this.rear=null;
    }
    push(val){
        let node= new Node(val)
        if(this.rear==null){
            this.rear=node;
            this.front=node;
        }else{
            this.rear.next= node;
            this.rear=node;
        }

    }
    shitf(){
        if(this.front==null){
            return null
        }
        let ans = this.front.val;
this.front=this.front.next;
if(this.front==null){
    this.rear= null
}
return ans
    }
    peek(){
        return this.front.val
    }

    isEmpty(){
        return this.front==null
    }
    print(){
        let cur = this.front;
        if(cur==null)return "empty"
        while(cur){
            console.log(cur.val);
            cur= cur.next
        }
    }
    rev(){
        let cur = this.front;
        this.front=this.rear;
        this.rear= cur

        let prev = null;

        while(cur){
            
          let temp = cur.next;
          cur.next=prev;
          prev=cur;
          cur=temp
        }
    }

}

const Queue = new queue();

Queue.push(10);
Queue.push(20);
Queue.push(30);

Queue.print();
// console.log("Dequeued:", Queue.shitf());
// console.log("Queue after dequeue:");
// Queue.print();

// Queue.rev();
// console.log("Queueueue after reverse:");
// Queue.print();

Queue.push(100);
Queue.rev();
console.log("Single element reverse:");
Queue.print();