// // // class TrieNode {
// // //     constructor(){
// // //         this.children={};
// // //         this.isEndofWord=false;
// // //     }

// // // }
// // // class Trie {
// // //     constructor() {
// // //         this.root = new TrieNode();
// // //     }
    
// // // insert(val){
// // //     let cur = this.root;
// // //     for(let x of val){
// // //         if(!cur.children[x]){
// // //             cur.children[x]=new TrieNode()
// // //         }
// // //         cur=cur.children[x]
// // //     }
// // //     cur.isEndofWord=true;
// // // }


// // // search(word){
// // //     let cur= this.root;
// // //     for(let x of word){
// // //         if(!cur.children[x]){
// // //             return false;
// // //         }
// // //         cur= cur.children[x]
// // //     }
// // //     return cur.isEndofWord
// // // }

// // // prefix(word){
// // //     let cur = this.root;
// // //     for( let x of word){
// // //         if(!cur.children[x]){
// // //             return false
// // //         }
// // //         cur= cur.children[x]
// // //     }
// // //     return true
// // // }
// // // }








// // class treeNode{
// //     constructor(){
// //         this.treeNode={},
// //         this.end= false
// //     }
// // }

// // class trie{
// //     constructor(){
// //         this.root=new treeNode()
// //     }
// //     insert(val){
// //         let cur = this.root;
// //         for(let i of val){
// //             if(!cur.treeNode[i]){
// //                 cur.treeNode[i]=new treeNode()
// //             }
// //             cur=cur.treeNode[i]
// //         }
// //          cur.end= true
// //     }
// //     search(val){
// //         let cur = this.root;
// //         for(let i of val ){
// //             if(!cur.treeNode[i]){
// //                 return false
// //             }
// //             cur=cur.treeNode[i]
// //         }
// //         return cur.end;
// //     }
// //     prefix(val){
// //         let cur = this.root;
// //         for(let i of val){
// //             if(!cur.treeNode[i]){
// //                 return false
// //             }
// //             cur=cur.treeNode[i]
// //         }
// //         return true
// //     }
// //     autoSuggestion(val){
// //         let cur= this.root;
// //         for(let x of val){
// //             if(!cur.treeNode[x]){
// //                 return [];
// //             }
           
// //         }
// //          let result = [];
// //             this.dfs(cur,val,result)
// //         return result
// //     }
// //     dfs(cur,word,result){
// //         if(cur.end==true)result.push(word)
// //         for(let x in cur){
// //             this.dfs(cur.treeNode[x],word+x,result)
// //         }
        
// //     }
// // }


// // // {
// // //   children: {
// // //     c: {
// // //       children: {
// // //         a: {
// // //           children: {
// // //             t: { end: true, children: {} },
// // //             r: { end: true, children: {} }
// // //           },
// // //           end: false
// // //         },
// // //         h: {
// // //           children: {
// // //             a: {
// // //               children: {
// // //                 d: { end: true, children: {} }
// // //               },
// // //               end: false
// // //             }
// // //           },
// // //           end: false
// // //         }
// // //       },
// // //       end: false
// // //     },
// // //     d: {
// // //       children: {
// // //         o: {
// // //           children: {
// // //             g: { end: true, children: {} }
// // //           },
// // //           end: false
// // //         }
// // //       },
// // //       end: false
// // //     }
// // //   },
// // //   end: false
// // // }

// class TrieNode{
//     constructor(){
//         this.children ={};
//         this.end =false
//     }

// }

// class Trie{
//     constructor(){
//         this.root= new TrieNode()
//     }
//     insert(word){
//             let cur  =this.root;
//         for( let x of  word){
//             if(!cur.children[x]){
//         cur.children[x]=new TrieNode()
// }
// cur=cur.children[x]
//         }
//         cur.end=true
//     }
//     search(word){
//         let cur   = this.root;
//         for(let x of word){
//             if(!cur.children[x]){
//                 return false
//             }
//             cur = cur.children[x]
//         }
//         return cur.end
//     }
//     prefix(word){
//         let cur = this.root ;
//         for(let i of  word){
//             if(!cur.children[i]){
//                 return false
//             }
//             cur=cur.children[i]
//         }
//         return true
//     }
//     autosuggestion(val){
//         let cur = this.root;
//         for(let x of val){
//             if(!cur.children[x]){
//                 return []
//             }
//             cur=cur.children[x]
//         }
//         let result  = [];
    
//         this.dfs(cur,result,val)
//         return result
//     }
//     dfs(cur,result,word){
      
//         if(cur.end==true)result.push(word);
//             for(let x  in cur.children){
//                 this.dfs(cur.children[x],result,word+x)
//             }



//     }
// }
// let t = new Trie();

// // Insert
// t.insert("cat");
// t.insert("car");
// t.insert("dog");

// // Search
// console.log(t.search("cat")); // true ✅
// console.log(t.search("car")); // true ✅
// console.log(t.search("ca"));  // false ❌ (not full word)
// console.log(t.search("dog")); // true ✅
// console.log(t.search("do"));  // false ❌

// // Prefix
// console.log(t.prefix("ca")); // true ✅
// console.log(t.prefix("do")); // true ✅
// console.log(t.prefix("z"));  // false ❌

// console.log(t.autosuggestion("c"))

class node{
    constructor(val){
        this.val=val;
        this.left = null;
        this.right= null;
    }
}
class bst{
    constructor(){
        this.root=null
    }
    insert(val){
    let newNode = new node(val)
    if(!this.root){this.root=newNode;
        return;
    }
    let q = [this.root]
    while(q.length){
        
        let cur = q.shift();
        if(cur.val>val){
            if(!cur.left){
                cur.left=newNode;
                return;
            }else{
                q.push(cur.left);
            }
        }else{
            if(!cur.right){
                cur.right= newNode;
                return;
            }else{
                q.push(cur.right)
            }
        }
    }
    

    } 
deleteNOde(root=this.root,val){
    if(!root)return null;
    if(root.val<val){
        root.left= this.deleteNOde(root.right,val)

    }else if(root.val>val){
        root.left=this.deleteNOde(root.left,val)
    }else{
         if(!root.left)this.deleteNOde(root.right,val);
         if(!root.right)this.deleteNOde(root.left,val);
         let successor =this.min(root.right);
         root.val= successor.val;
         root.right=this.deleteNOde(root.right,successor.val)
    }
    return root
}
min(root){
    if(root.left){
    return    this.min(root.left)
    }
    return root

}
    inorder(root = this.root,arr=[]){

    if(root){

        this.inorder(root.left,arr);

        arr.push(root.val);

        this.inorder(root.right,arr);
    }
        return arr
    

}
preorder(){
  
    let stack = [this.root];
    let ans = []
    while(stack.length){
  let cur = stack.pop();
  ans.push(cur.val);
  cur.right&&stack.push(cur.right);
   cur.left&& stack.push(cur.left)
    }
    return ans
}
inordertra(){
    let ans =[];
    let stack=[];
    let cur = this.root;
    while(cur||stack.length){
        while(cur){
            stack.push(cur);
            cur= cur.left;
        }
        cur=stack.pop();
        ans.push(cur.val);
        cur= cur.right
    }
    return ans
}
postorder(){
    let s1 = [this.root];
    let s2 = [];
    while(s1.length){
        let cur = s1.pop();
        s2.push(cur.val);
        cur.left&&s1.push(cur.left);
        cur.right&&s1.push(cur.right);

    }
    let ans =[]
    while(s2.length){
        ans.push(s2.pop())
    }
    return ans 
}

levelorder(root = this.root){
    if(!root)return null;
    let cur  = root;
    let ans=[];
    function trav(cur,level){
        if(!ans[level]) ans[level]=[];
        ans[level].push(cur.val);
        cur.left&& trav(cur.left,level+1);
        cur.right&& trav(cur.right,level+1);

    }
    trav(cur,0)
    return ans
}

maxdepth(root = this.root){
    let maxdepth = 0;
    function trav(cur,depth){
        maxdepth = Math.max(depth,maxdepth);
        cur.left && trav(cur.left,depth+1);
        cur.right && trav(cur.right,depth+1)
    }
    trav(root,1);
    return maxdepth
}
pathSum(root  = this.root,val){
    let ans  = false;
    let psum=val;
    function trav(cur,sum){
        let sumal = sum+cur.val;
        if(!cur.left&&!cur.right){
            if(sumal==psum){
                ans = ans||true
            }
        }
        cur.left && trav(cur.left,sumal);
        cur.right && trav(cur.right,sumal)
    } 
    trav(root, 0)
    return ans
}
issmtic(root = this.root){
    function trav(left,right){
        if(!left&&!right){
            return true
        }
        if(!left||!right){
            return false
        }
        return left.val===right.val&&trav(left.left,right.right)&&trav(left.right,right.left)
    }
   return trav(root.left,root.right)
}

isValid(curr,lo=null,hi=null){
    if(!cur)return true;
if((lo==null&& curr.val<=lo)||(hi==null&&curr.val>=hi))return false;

    let left = this.isValid(curr.left,lo,curr.val);
    let right = this.isValid(curr.right,curr.val,hi)

    return left&&right;
}
}
let tree = new bst();

tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(3)
console.log(tree.root)
console.log(tree.inorder())