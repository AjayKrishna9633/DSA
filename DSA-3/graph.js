// class graph{
//     constructor(){
//         this.adjecentList=[]
//     }
//     addVertex(vertex){
//         if(!this.adjecentList[vertex]){
//             this.adjecentList[vertex]= new Set()
//         }
//     }
//     addEgde(vertex1,vertex2){
//         if(!this.adjecentList[vertex1]){
//             this.addVertex(vertex1);
//         }
//         if(!this.adjecentList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecentList[vertex1].add(vertex2);
//         this.adjecentList[vertex2].add(vertex1);
//     }
//     hasEdge(vertex1,vertex2){
//         return this.adjecentList[vertex1].has(vertex2)&&this.adjecentList[vertex2].has(vertex1);
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecentList[vertex1].delete(vertex2)&&this.adjecentList[vertex2].delete(vertex1);
//     }
//     removeVertex(vertex){
//         if(!this.adjecentList[vertex])return ;

const { startTransition } = require("react");

//         for(let s of this.adjecentList[vertex]){
//             this.removeEdge(vertex,s);
//         }
//         delete this.adjecentList[vertex]
//     }
// }

// class graph{
//     constructor(){
//         this.adjecent={};
//     }
//     addVertex(vertex){
//         if(!this.adjecent[vertex])this.adjecent[vertex]= new Set();
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjecent[vertex1]){
//             this.addVertex(vertex1);
//         }
//         if(!this.adjecent[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecent[vertex1].add(vertex2);
//         this.adjecent[vertex2].add(vertex1);
//     }
//     hasEgde(vertex1,vertex2){
//         return this.adjecent[vertex1]?.has(vertex2)&&this.adjecent[vertex2]?.has(vertex1)
//     }
//     deleteEdge(vertex1,vertex2){
//         if(this.adjecent[vertex1]){
//             this.adjecent[vertex1].delete(vertex2)
//         }
//         if(this.adjecent[vertex2]){
//             this.adjecent[vertex2].delete(vertex1)
//         }
//     }
//     removeVertex(vertex){
//         if(!this.adjecent[vertex]) return ;

//         for( let x of this.adjecent[vertex]){
//             this.deleteEdge(vertex,x)
//         }
//         delete this.adjecent[vertex]
//     }
   
    
//     print(){
//         for( let x in this.adjecent ){
//             console.log([...this.adjecent[x]])
//         }
//     }
      
//     dfs(start){
//         let queue= [start];
//         let visited = new Set();
//         visited.add(start)
//         while(queue.length){
//             let cur = queue.shift();
//             console.log(cur);
//             for(let x of this.adjecent[cur]){
//                 if(!visited.has(x)){
//                     visited.add(x);
//                     queue.push(x)
//                 }
//             }
//         }
//     }
//     bfs(start){
//         let stack = [start];
//         let visited= new Set();
//         visited.add(start);
//         while(stack.length){
//             let cur= stack.pop();
//             console.log(cur);
//             for(let x of this.adjecent[cur]){
//                 if(!visited.has(x)){
//                     visited.add(x);
//                     stack.push(x)
//                 }
//             }
//         }
//     }
// hasCycle(){
//     let visited= new Set();
//     for(let x in this.adjecent){
//         let queue= [[x,null]];
//        visited.add(x)
//         while(queue.length){
//              let [vertex,parent]=queue.shift();
//              for(let i of this.adjecent[vertex]){
//                 if(!visited.has(i)){
//                     visited.add(i)
//                     queue.push([i,vertex])
//                 }else if(parent!=i){
//                     return true
//                 }
//              }
//         }
        
//     }
//     return false;
// }


// hasCycle(){
//     let visited= new Set();
//     for(let start in this.adjecent){
//         let queue = [[start,null]];
//         visited.add(start);
//         while(queue.length){
//             let [vertex,parent]=queue.shift();
//             for(let adj of this.adjecent[vertex]){
//                 if(!visited.has(adj)){
//                     visited.add(adj);
//                     queue.push([adj,vertex]);
//                 }else if(adj!==parent){
//                     return true
//                 }
//             }
//         }
//     }
//     return false
// }


// }





// const g = new graph();

// g.addEdge("A", "B");
// g.addEdge("A", "D");
// g.addEdge("B", "C");
// g.addEdge("C", "D");
// g.addEdge("E", "F");

// console.log("Graph:");
// g.print();

// console.log("\nHas Edge A-B:");
// console.log(g.hasEgde("A", "B"));



// console.log(g.hasCycle())
// g.dfs("B")

// g.bfs("B")


class graph{
    constructor(){
        this.adjecent={}
    }

    addvertex(vertex){
        if(!this.adjecent[vertex])this.adjecent[vertex]=new Set();
    }
    addedge(vertex1,vertex2){{
        if(!this.adjecent[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjecent[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjecent[vertex1].add(vertex2);
        this.adjecent[vertex2].add(vertex1);
        
    }}
        print(){
        for( let x in this.adjecent ){
            console.log([...this.adjecent[x]])
        }
    }
    deletevertex(vertex){
        let cur = this.adjecent[vertex];
        for(let i of cur){
            this.deleteEdge(vertex,i)
        }
        delete this.adjecent[vertex]
    }
    deleteEdge(vertex1,vertex2){
      if(this.adjecent[vertex1])  this.adjecent[vertex1].delete(vertex2);
      if(this.adjecent[vertex2])this.adjecent[vertex2].delete(vertex1);
    }
    hasEdge(vertex1,vertex2){
        return this.adjecent[vertex1].has(vertex2)&&this.adjecent[vertex2].has(vertex1)
    }
    bfs(start){
        let queue = [start];
        let set = new Set();
        set.add(start);
        while(queue.length){
            let cur = queue.shift();
            console.log(cur)
            for(let i of this.adjecent[cur] ){
                if(!set.has(i)){queue.push(i);
                set.add(i);}
            }
        }
    }
    hascycle(start){
        let queue =[[start,null]];
        let set = new Set();
         set.add(start);
         while(queue.length){
            let [vertex,parent]= queue.shift();
            for(let i of this.adjecent[vertex]){
                if(!set.has(i)){
                    queue.push([i,vertex]);
                    set.add(i);

                }else if(i!= parent ){
                    return true
                }
            }
         }
         return false
    }
}


const g = new graph();

g.addedge("A", "B");
g.addedge("A", "D");
g.addedge("B", "C");
g.addedge("C", "D");
g.addedge("E", "F");

console.log("Graph:");
g.print();



console.log("Before Delete:");
console.log(g.adjecent);

g.deleteEdge("A", "B");

console.log("\nAfter deleteEdge(A,B):");
console.log(g.adjecent);

g.deletevertex("C");

console.log("\nAfter deleteVertex(C):");
console.log(g.adjecent);































// class graph{
//     constructor(){
//         this.adjecntList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjecntList[vertex]){
//             this.adjecntList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjecntList[vertex1]){
//             this.addVertex(vertex1);
//         }
//         if(!this.adjecntList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecntList[vertex1].add(vertex2);
//         this.adjecntList[vertex2].add(vertex1);

//     }
//     removeVertex(vertex){
//         if(!this.adjecntList[vertex]){
//             return ;
//         }
//         for( let r of this.adjecntList[vertex]){
//             this.removeEdge(vertex,r);
//         }
//         delete this.adjecntList[vertex]
//     }
//     removeEdge(vertex1,vertex2){
//         if(this.adjecntList[vertex1]) this.adjecntList[vertex1].delete(vertex2);
//         if(this.adjecntList[vertex2]) this.adjecntList[vertex2].delete(vertex1);
//     };
//     hasEdge(vertex1,vertex2){
//         return this.adjecntList[vertex1]?.has(vertex2)&& this.adjecntList[vertex2]?.has(vertex1);

//     }

// }