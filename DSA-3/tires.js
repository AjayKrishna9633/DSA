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