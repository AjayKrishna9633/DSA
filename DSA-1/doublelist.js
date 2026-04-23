function node(val){
    this.val=val,
    this.next=null,
    this.prev=null
}

function head(val){
    this.head=null,
    this.tail=null
    this.size=0
}


head.prototype.addhead=function(val){
    let newNode = new node(val);
   if(this.head!==null){
    this.head.prev=newNode;
    newNode.next=this.head
    this.head=newNode
   }else{

   this.head=newNode
   this.tail=newNode
   
   }
this.size++
}


let mylist = new head();

mylist.addhead(4);
mylist.addhead(6)
mylist.addhead(9)


head.prototype.addTail=function(val){
let newNode = new node(val);
if(this.tail==null){
    this.head=newNode;
    this.tail=newNode;
}else{
    this.tail.next=newNode;
    newNode.prev=this.tail
    this.tail=newNode;
}
this.size++
}
mylist.addTail(2);



head.prototype.addIndex=function(val,index){
    let newNode= new node(val);

let cur= this.head;
for(let i=0;i<index-1;i++){
    cur=cur.next;
}
let temp= cur.next;
cur.next=newNode;
newNode.prev=cur
newNode.next=temp
temp.prev=newNode


}
console.log(mylist.tail)