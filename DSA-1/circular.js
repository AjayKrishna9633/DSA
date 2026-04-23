function head(){
    this.tail=null;
    this.head=null;
    this.size=0
}

function Node(val){
    this.val=val;
    this.next=null
}

head.prototype.addHead=function(val){
    let newNode=new Node(val);
    if(!this.head){this.head=newNode;
    this.tail=newNode
    newNode.next=this.head}
    else{
        newNode.next=this.head;
        this.head=newNode;
        this.tail.next=this.head
    }
    this.size++
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


head.prototype.addTail=function(val){
    let newNode = new Node(val);
    if(!this.head&&!this.tail){
        this.tail=newNode;
        this.head=newNode;
        newNode.next=this.head
    }else{
        this.tail.next=newNode;
        this.tail=newNode
        newNode.next=this.head;
        

    }
}
let mylist = new head;

mylist.addHead(3)
mylist.addHead(4)
mylist.addHead(5)
mylist.addHead(6)
mylist.addHead(7)

console.log(mylist)
console.log(mylist.iscircle())