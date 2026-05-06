// class TrieNode {
//     constructor(){
//         this.children={};
//         this.isEndofWord=false;
//     }

// }
// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }
    
// insert(val){
//     let cur = this.root;
//     for(let x of val){
//         if(!cur.children[x]){
//             cur.children[x]=new TrieNode()
//         }
//         cur=cur.children[x]
//     }
//     cur.isEndofWord=true;
// }


// search(word){
//     let cur= this.root;
//     for(let x of word){
//         if(!cur.children[x]){
//             return false;
//         }
//         cur= cur.children[x]
//     }
//     return cur.isEndofWord
// }

// prefix(word){
//     let cur = this.root;
//     for( let x of word){
//         if(!cur.children[x]){
//             return false
//         }
//         cur= cur.children[x]
//     }
//     return true
// }
// }








class treeNode{
    constructor(){
        this.treeNode={},
        this.end= false
    }
}

class trie{
    constructor(){
        this.root=new treeNode()
    }
    insert(val){
        let cur = this.root;
        for(let i of val){
            if(!cur.treeNode[i]){
                cur.treeNode[i]=new treeNode()
            }
            cur=cur.treeNode[i]
        }
         cur.end= true
    }
    search(val){
        let cur = this.root;
        for(let i of val ){
            if(!cur.treeNode[i]){
                return false
            }
            cur=cur.treeNode[i]
        }
        return cur.end;
    }
    prefix(val){
        let cur = this.root;
        for(let i of val){
            if(!cur.treeNode[i]){
                return false
            }
            cur=cur.treeNode[i]
        }
        return true
    }
}

let t = new trie();

// Insert
t.insert("cat");
t.insert("car");
t.insert("dog");

// Search
console.log(t.search("cat")); // true ✅
console.log(t.search("car")); // true ✅
console.log(t.search("ca"));  // false ❌ (not full word)
console.log(t.search("dog")); // true ✅
console.log(t.search("do"));  // false ❌

// Prefix
console.log(t.prefix("ca")); // true ✅
console.log(t.prefix("do")); // true ✅
console.log(t.prefix("z"));  // false ❌
// {
//   children: {
//     c: {
//       children: {
//         a: {
//           children: {
//             t: { end: true, children: {} },
//             r: { end: true, children: {} }
//           },
//           end: false
//         },
//         h: {
//           children: {
//             a: {
//               children: {
//                 d: { end: true, children: {} }
//               },
//               end: false
//             }
//           },
//           end: false
//         }
//       },
//       end: false
//     },
//     d: {
//       children: {
//         o: {
//           children: {
//             g: { end: true, children: {} }
//           },
//           end: false
//         }
//       },
//       end: false
//     }
//   },
//   end: false
// }