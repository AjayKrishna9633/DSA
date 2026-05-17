
// class MinHeap{
//     constructor(){
//         this.heap=[5,10,20,30];
//     }
//     getLeftChildIndex(i){
//         return (2*i)+1
//     }
//     getRigthChildIndex(i){
//         return (2*i)+2
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     insert(val){
//         this.heap.push(val)
//         let lastindex= this.heap.length-1;
        
//     }
//     heapifyUp(i){
//         while(i){
//         let parentindex= this.getParentIndex(i);
//             if(this.heap[i]<this.heap[parentindex]){
//                 [this.heap[i],this.heap[parentindex]]=[this.heap[parentindex],[this.heap[i]]]
//             i=parentindex
//             }else break

    
//     }
//     }





// }







// class MinHeap{

//     constructor(){
//         this.heap=[5,10,20,30,15]
//     }
//     getleftIndex(i){
//         return (i*2)+1
//     }
//     getrightIndex(i){
//         return (i*2)+2
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     insert(val){
//         this.heap.push(val)
//         let lastindex= this.heap.length-1
//         this.heapify(lastindex)
    
//     }
//     heapify(i){
//         while(i>0){
//         let parentindex = this.getParentIndex(i);
//             if(this.heap[i]<this.heap[parentindex]){
//                 [this.heap[i],this.heap[parentindex]]=[this.heap[parentindex],this.heap[i]]

//                 i=parentindex
//             }else break

//     }

//     }

//     extract(){
//       if(this.heap.length<1)return null  

//         let lastindex= this.heap.length-1
//       let min = this.heap[0];
     
//       [this.heap[0],this.heap[lastindex]]=[this.heap[lastindex],this.heap[0]];
//  this.heap.pop()
//       this.heapifyDown(0);
//       return min
    
//     }


//     heapifyDown(i){
    
       
//         let left = this.getleftIndex(i);
//         let right = this.getrightIndex(i);
//          let n= this.heap.length-1;
//         let smallest = i
//         if(left<n&&this.heap[left]<this.heap[smallest])
//         {
//             smallest=left
//         }
//         if(right<n&&this.heap[right]<this.heap[smallest]){
//             smallest= right
//         }

//         if(i!=smallest){
//             [this.heap[i],this.heap[smallest]]=[this.heap[smallest],this.heap[i]];
            
//         this.heapifyDown(smallest)
//         }

//     }

//  // peek operation
//     peek() {
//         if(!this.heap.length) return null;
//         return this.heap[0];
//     }


// }



// let heap = new MinHeap();
// heap.insert(5);
// heap.insert(20);
// heap.insert(4);
// heap.insert(10);
// heap.insert(1);
// heap.insert(0);
// console.log(heap.peek());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.heap);











// let arr = [5,23,3,1,8,9];

// function heapSort(arr){
//     let n =arr.length;
//      for(let i =Math.floor(n/2);i>=0;i--){
        
//         heapify(arr,i,n)
//      }

//      for(let i=n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,0,i)
//      }
//      return arr;
// }


// function heapify(arr,i,n){
//     let largest = i;
//     let left  = (2*i)+1;
//     let  right = (2*i)+2;
    
//     if(left<n&& arr[left]>arr[largest]){
//         largest = left
//     }
//     if(right<n&&arr[right]>arr[largest]){
//         largest=right;
//     }
//     if( i!=largest){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]];
//         heapify(arr,largest,n)
//     }
   
// }



// console.log(heapSort(arr));



// class MinHeap{
//     constructor(){
//         this.heap=[5, 10, 20, 30];
//     }
//     getleftIndex(i){
//         return  (i*2)+1
//     }
//     getrightIndex(i){
//         return (i*2)+2
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
//     insert(val){
//         this.heap.push(val)
//         let lastindex = this.heap.length-1;
//         this.heapify(lastindex)
//     }
//     heapify(i){
//         while(i>0){
//             let parentindex = this.getParentIndex(i)
//             if(this.heap[i]<this.heap[parentindex]){
//                 [this.heap[i],this.heap[parentindex]]=[this.heap[parentindex],this.heap[i]]
//                 i=parentindex
//             }else break
//         }
//     }
//     extract(){
//         let min = this.heap[0];
//         let lastindex= this.heap.length-1;
//         [this.heap[0],this.heap[lastindex]]=[this.heap[lastindex],this.heap[0]];
//         this.heap.pop();
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(i){
//         let right = this.getrightIndex(i)
//         let left = this.getleftIndex(i)
//         let n = this.heap.length;
//         let smallest = i;
//         if(left<n&& this.heap[left]<this.heap[smallest]){
//             smallest=left
//         }
//         if(right<n&& this.heap[right]<this.heap[smallest]){
//             smallest= right
//         }
//         if(smallest!=i){
//             [this.heap[smallest],this.heap[i]]= [this.heap[i],this.heap[smallest]]
//             this.heapifyDown(smallest)
//         }

//     }
//  peek() {
//         if(!this.heap.length) return null;
//         return this.heap[0];
//     }

// }

// let h = new MinHeap();

// console.log("Initial Heap:", h.heap);

// h.insert(2);
// console.log("After insert 2:", h.heap);

// h.insert(1);
// console.log("After insert 1:", h.heap);

// console.log("Extract:", h.extract());
// console.log("Heap after extract:", h.heap);

// console.log("Extract:", h.extract());
// console.log("Heap after extract:", h.heap);

// console.log("Peek:", h.peek());





//  heapifyDown(i){
//         let right = this.getrightIndex(i)
//         let left = this.getleftIndex(i)
//         let n = this.heap.length;
//         let smallest = i;
//         if(left<n&& this.heap[left]<this.heap[smallest]){
//             smallest=left
//         }
//         if(right<n&& this.heap[right]<this.heap[smallest]){
//             smallest= right
//         }
//         if(smallest!=i){
//             [this.heap[smallest],this.heap[i]]= [this.heap[i],this.heap[smallest]]
//             this.heapifyDown(smallest)
//         }
//     }


// class Minheap{
//     constructor(){
//         this.table= [];

//     } 
//     getleftChild(i){
//         return (i*2)+1
//     }
//     getrightChild(i){
//         return (i*2)+2
//     }
//     getparent(i){
//         return Math.floor((i-1)/2);
//     }
//     insert(val){
//         this.table.push(val)
//         let largest= this.table.length;
//         this.heapfiy(largest)
//     }
//     heapfiy(i){
//         while(i>0){
//             let parentindex= this.getparent(i);
//             if(this.table[i]<this.table[parentindex]){
//                 [this.table[i],this.table[parentindex]]=[this.table[parentindex],this.table[i]]
//             }else break
//         }
//     }
//     peekMIN(){
//         return this.table[0]
//     }

//     delete(){
//         let lastindex= this.table.length;
//         let ans = this.table[0]
//         [this.table[0],this.table[lastindex]]=[this.table[lastindex],this.table[0]];
//         this.table.pop();
//         this.heapfiyDown(0)
//         return ans
//     }
//     heapfiyDown(i){
//         let smallest =i;
//         let left=this.getleftChild(i);
//         let right= this.getrightChild(i);
//         let n = this.table.length;
//         if(left<n&&this.table[left]<this.table[smallest]){
//             smallest=left
//         }if(right<n&&this.table[right]<this.table[smallest]){
//             smallest=right;
//         }
//         if(smallest!=i){
//             [this.table[smallest],this.table[i]] =   [this.table[i],this.table[smallest]]
//             this.heapfiyDown(smallest)
//         }
//     }
// }



// class MinHeap{
//     constructor(){
//         this.table= [];
//     }
//     getleftIndex(i){
//         return (i*2)+1
//     }
//     getrightIndex(i){
//         return (i*2)+2
//     }
//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }
//     insert(val){
//         this.table.push(val)
//         let lastindex = this.table.length-1;
//         this.heapfiy(lastindex)
//     }
//     heapfiy(i){
//         if(i>0){
//         let parent = this.getParentIndex(i);
//         if(this.table[parent]>this.table[i]){
//             [this.table[parent],this.table[i]]=[this.table[i],this.table[parent]];
//               this.heapfiy(parent)
//         }
      
//     }
//     }
//     delete(){
//         let lastindex = this.table.length-1;
//         let ans = this.table[0]
//         [this.table[0],this.table[lastindex]]= [this.table[lastindex],this.table[0]];
//         this.table.pop();

//         this.heapfiyDown(0)
//         return ans
//     }
//     minPeek(){
//         return this.table[0]
//     }

//     heapfiyDown(i){
//          let n = this.table.length;
//         while(true){
//              let left = this.getleftIndex(i);
//         let right = this.getrightIndex(i);
//       let smallest = i
//             if(this.table[left]<this.table[smallest]){
           
//                 smallest= left
//             }else if(this.table[right]<this.table[smallest]){
              
//             smallest=right
//             }
//             if(smallest!=i){
//                      [this.table[i],this.table[smallest]]=[this.table[smallest],this.table[i]];
//             }else{
//                 break
//             }
            
//         }
//     }


// }





// function heapSort(arr){
//     let n =arr.length;
//     for(let i =n-1;i>=0;i--){
//         heapfiydown(arr,i,n)
//     }
//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapfiydown(arr,0,i)
//     }
//     return arr
// }


// function heapfiydown(arr,i,n){
//     let largest= i;
//     let left = (i*2)+1;
//     let right = (i*2)+2;
//     if(left<n&&arr[left]<arr[largest]){
//         largest= left
//     }
//     if(right<n&&arr[right]<arr[largest]){
//         largest= right
//     }
//     if(i!==largest){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapfiydown(arr,largest,n)
//     }
// }


// console.log(heapSort([3,5,2,78,0]))


// class minheap{
//     constructor(){
//         this.table=[5, 10, 20, 30]
//     }
//     getparent(i){
//         return Math.floor((i-1)/2)
//     }
//     getchildleft(i){
//         return (i*2)+1
//     }
//     getrightchild(i){
//         return (i*2)+2
//     }

//     insert(val){
//         this.table.push(val);
//         let lastindex =this.table.length-1
//         this.heapify(lastindex)
//     }
//     heapify(i){
//         if(i>0){
//         let parent = this.getparent(i);
//         if(this.table[i]<this.table[parent]){
//             [this.table[i],this.table[parent]]=[this.table[parent],this.table[i]]
//         }
//         this.heapify(parent)
//    } }
//    remove(){
//     let ans = this.table[0];
//       let length = this.table.length-1;
//       [this.table[0],this.table[length]]=[this.table[length],this.table[0]]

//     this.table.pop();
  
//     this.heapifyDown(0);
//     return ans
//    }

//    heapifyDown(i){
//     let left= this.getchildleft(i);
//     let right = this.getrightchild(i);
//     let n = this.table.length;
//     let smallest =i;
//     if(left<n&&this.table[left]<this.table[smallest]){
//         smallest=left
//     }
//     if(right<n&&this.table[right]<this.table[smallest]){
//         smallest=right;
//     }
//     if(smallest!=i){
//         [this.table[smallest],this.table[i]]=[this.table[i],this.table[smallest]]
//         this.heapifyDown(smallest)
//     }
//    }
// }

// let h = new minheap();

// console.log("Initial Heap:", h.table);

// h.insert(2);
// console.log("After insert 2:", h.table);

// h.insert(1);
// console.log("After insert 1:", h.table);

// console.log("Extract:", h.remove());
// console.log("table after remove:", h.table);

// console.log("remove:", h.remove());
// console.log("table after extract:", h.table);


// function heapsort(arr){
//     let n = arr.length;
// for(let i= n-1;i>=0;i--){
//     heapfiyDown(arr,i,n)
// }
// for(let i =n-1;i>=0;i--){
//     [arr[0],arr[i]]=[arr[i],arr[0]]
//     heapfiyDown(arr,0,i)
// }
// return arr
// }

// function heapfiyDown(arr,i,n){
//     let smallest=i;
//     let left = (i*2)+1;
//     let right =(i*2)+2;

//     if(left<n&&arr[left]<arr[smallest]){
//         smallest=left;
//     }
//     if(right<n&&arr[right]<arr[smallest]){
//         smallest=right
//     }
//     if(smallest!=i){
//         [arr[smallest],arr[i]]=[arr[i],arr[smallest]]
//         heapfiyDown(arr,smallest,n)
//     }
// }

// console.log(heapsort([3,2,5,1,9]))