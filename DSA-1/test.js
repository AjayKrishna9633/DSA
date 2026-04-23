// function find(n,arr){
//     if(n>arr.length)return 'invaild'
// let sm =-Infinity

//     for(let i=0;i<arr.length;i++){
//         if(sm<)
//     }



// return ar[n-1];
// }

// console.log(find(2,[3,2,1,5]))


// function subarr(arr,n){
//     let map ={};

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<=i;j++){
//             // for(let k=0;k<)
//             console.log(arr[j])
//         }
//     }
// }
// console.log(subarr([1,2,3],4))



//10,20,10,30,40

function Head(){
    this.head=null;
    this.size=0
}
function Node(val){
    this.val=val;
    this.next=null
}
 let set= new Set
Head.prototype.addHead=function(val){
   
    if(!set.has(val)){ 

    let newNode=new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    set.add(val)
    this.size++
    }
  
}

let mylist = new Head;
 mylist.addHead(10)
 mylist.addHead(20)
  mylist.addHead(10)
  mylist.addHead(30)
  mylist.addHead(40)
//  console.log(mylist)

 Head.prototype.travel=function(){
    let cur = this.head;
    while(cur.next){
          
        console.log(cur);
      cur=cur.next;
    }
return cur
 }
 console.log(mylist.travel())


// let str ="abbcdde";
// function arr(str){
// let map ={}
// for(let i=0;i<str.length;i++){
//     if(!map[str[i]]){
//         map[str[i]]=1
//     }else{
//         map[str[i]]++
//     }
// }
// for(let x in map){
//     if(map[x]==1)return x
   
// }




// }

// console.log(arr(str))


// function rec(arr,i=0){
// if(i==arr.length){
//     return 0
// }


// return rec(arr,i+1)+arr[i]


// }

// console.log(rec([1,2,3]))