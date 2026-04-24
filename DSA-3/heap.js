
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

