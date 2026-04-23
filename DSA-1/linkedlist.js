function head(){
    this.head=null;
    this.size=0
    this.tail=null
}

function Node(val){
    this.val=val,
    this.next=null
}

head.prototype.addHead=function(val){
    let  newNOde = new Node(val);
    if(this.head==null)this.tail=newNOde

    newNOde.next=this.head
    this.head=newNOde;

    this.size++
}
 head.prototype.addTail=function(val){
    let newNode= new Node(val);

    if(!this.head) this.head=newNode

    this.tail.next=newNode;
    this.tail=newNode;
    
    this.size++
 }

 head.prototype.traverse=function () {
    let current = this.head;

    while (current !== null) {
        console.log(current);
        current = current.next;
    }
}

head.prototype.middle=function(){
    let fast = this.head;
    let slow =this.head;

    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow
}

head.prototype.addIndex=function(val,index){
let newNode= new Node(val)
    let cur = this.head;

    if(index<1&&index>this.size) return 'invaild'

    if(!this.head) this.head=newNode


    for(let i=0;i<index-1;i++){
        cur=cur.next;
    }

let temp = cur.next;
cur.next=newNode;
newNode.next=temp



}

head.prototype.deleteIndex=function(index){
let cur = this.head;
for(let i=0;i<index-1;i++){
    cur=cur.next
}
cur.next=cur.next.next
}

head.prototype.duplicate = function(){
let map = new Set()
let cur = this.head
let temp 
 while(cur){
    if(!map.has(cur.val)){
    map.add(cur.val)
    temp=cur
    

}else{
    temp.next=cur.next
}
cur=cur.next
 }

// console.log(map)

}
head.prototype.iscircle=function(){
    let  fast=this.head.next;
    let slow =this.head;
    while(fast&&fast.next){
         if(fast==slow)return  true
        fast=fast.next.next;
        slow=slow.next
    }
    return false
   
}



let mylist = new head;

mylist.addHead(4)
mylist.addHead(2)
mylist.addTail(7)
 mylist.addIndex(2,2);
// mylist.deleteIndex(3)
// console.log(mylist)
// console.log(mylist.middle())

 mylist.duplicate()
 mylist.traverse()
 console.log(mylist.iscircle())