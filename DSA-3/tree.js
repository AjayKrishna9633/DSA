// class Node{
//     constructor(val){
//         this.val=val,
//         this.left=null,
//         this.right=null
//     }

// }
// class tree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         if(!this.root)return true;
//         else return false;
//     }

//     isContain(root,val){
//         if(!root) return false
//         if(root.val==val)return true;

//         return this.isContain(root.left,val)||this.isContain(root.right,val)

//     }
//     insert(val){
//         if(this.isContain(this.root,val))return "duplicate found";
//         let newNode= new Node(val);
//         if(this.isEmpty())this.root=newNode;
//     else{ let q= [this.root]
//         while(q.length){
//             let cur = q.shift();
//             if(!cur.left){
//                 cur.left=newNode
//                 return
//             }else{
//                 q.push(cur.left)
//             }

//             if(!cur.right){
//                 cur.right= newNode;
//                 return
//             }else{
//                 q.push(cur.right)
//             }
//         }
//         }

//     }

//     travesel(root){
//       if(root){  this.travesel(root.left)
//         this.travesel(root.right)
//          console.log(root.val)

// }
        
//     }


// }

class node {
    constructor(val){
        this.val =val,
        this.left =null,
        this.right=null
    }
}

class tree{
    constructor(){
        this.root= null;
        this.set=new Set()
    }
    insert(val){
        if(this.set.has(val))return ;
        this.set.add(val)
         let newNode =new node(val);
        if(!this.root){
            this.root=newNode;
            return;
        }
        let queue=[this.root];
       
        while(queue.length){
            let cur = queue.shift();
            if(!cur.left){
                cur.left=newNode
                return;
            }else{
                queue.push(cur.left)
            }
            if(!cur.right){
                cur.right=newNode
                return;
            }else{
                queue.push(cur.right)
            }
        }
    }
    iscontain(val,next=this.root){
        let cur =next;
        if(!cur)return false;
        if(cur.val==val)return true;


        return this.iscontain(val,cur.left)||this.iscontain(val,cur.right);
    }
    travesel(root){
        let cur =root;if(cur){
        this.travesel(cur.left);
        this.travesel(cur.right)
        console.log(cur.val) }
    }
}