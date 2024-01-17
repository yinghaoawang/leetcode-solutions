// implementation of heap slow as hell, if possible, rewrite this

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.heap = [];
    this.maxLength = k;
    for (let num of nums) this.add(num);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    //     0
    //   1   2
    // 3  4 5  6

    //     4
    //   5   8
    // 5
    this.heap.push(val);
    if (val < this.heap[0]) {
        swap(this.heap, this.heap.length - 1, 0);
    }
    bubbleUp(this.heap, this.heap.length - 1);

    while (this.heap.length > this.maxLength) popMinHeap(this.heap);
    
    console.log('add ' + val, this.heap);
    return this.heap[0];
    // const leftIndex = 2 * i + 1;
    // const rightIndex = 2 * i + 2;

    function swap(heap, index1, index2) {
        const tmp = heap[index2];
        heap[index2] = heap[index1];
        heap[index1] = tmp;
    }

    function popMinHeap(heap) {
        swap(heap, 0, heap.length - 1);
        heap.pop();
        
        heapify(heap, 0);
    }

    function heapify(heap, index) {
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        
        if (leftIndex > heap.length - 1 && rightIndex > heap.length - 1) return;
        if (leftIndex > heap.length - 1) {
            if (heap[index] < heap[rightIndex]) return;
            swap(heap, index, rightIndex);
            heapify(heap, rightIndex);
            return;
        }
        if (rightIndex > heap.length - 1) {
            if (heap[index] < heap[leftIndex]) return;
            swap(heap, index, leftIndex);
            heapify(heap, leftIndex);
            return
        };

        const currVal = heap[index];
        const leftVal = heap[leftIndex];
        const rightVal = heap[rightIndex];
        if (rightVal > currVal && leftVal > currVal) return;
        if (rightVal > currVal) {
            swap(heap, index, leftIndex);
            heapify(heap, leftIndex);
            return;
        } 
        if (leftVal > currVal) {
            swap(heap, index, rightIndex);
            heapify(heap, rightIndex);
            return;
        }
        // if theyre both < currVal, then they can both be candidate for swap
        if (leftVal < rightVal) {
            swap(heap, index, leftIndex);
            heapify(heap, leftIndex);
        } else {
            swap(heap, index, rightIndex);
            heapify(heap, rightIndex);
        }
    }

    function bubbleUp(heap, index) {
        if (index < 0) return;
        const currVal = heap[index];
        const parentIndex = Math.floor((index - 1) / 2)
        if (parentIndex < 0) return;
        const parentVal = heap[parentIndex];
        if (currVal < parentVal) {
            swap(heap, index, parentIndex);
            bubbleUp(heap, parentIndex);
        }
    };
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */