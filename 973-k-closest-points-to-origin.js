/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = new MinHeap();
    let map = {};
    for (const point of points) {
        const d2 = point[0] * point[0] + point[1] * point[1];
        heap.insert(d2);
        if (map[d2] == null)
            map[d2] = [];
        map[d2].push(point);
    }

    const res = [];
    while (k-- > 0) {
        const d2 = heap.extractMin();
        res.push(map[d2].pop());
    }

    return res;
};

// asked chatgpt "can you write me a min heap in js... can youwrite it as short as possible"
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return min;
    }

    _heapifyUp(index) {
        const parentIndex = i => Math.floor((i - 1) / 2);
        while (index > 0 && this.heap[parentIndex(index)] > this.heap[index]) {
            [this.heap[parentIndex(index)], this.heap[index]] = [this.heap[index], this.heap[parentIndex(index)]];
            index = parentIndex(index);
        }
    }

    _heapifyDown(index) {
        const leftChild = i => 2 * i + 1;
        const rightChild = i => 2 * i + 2;
        let smallest = index;

        if (leftChild(index) < this.heap.length && this.heap[leftChild(index)] < this.heap[smallest]) {
            smallest = leftChild(index);
        }
        if (rightChild(index) < this.heap.length && this.heap[rightChild(index)] < this.heap[smallest]) {
            smallest = rightChild(index);
        }
        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this._heapifyDown(smallest);
        }
    }
}
