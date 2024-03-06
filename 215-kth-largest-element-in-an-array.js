/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    class MaxHeap {
        constructor(values = []) {
            this.values = [];
            for (const value of values) this.add(value);
        }
        add(value) {
            this.values.push(value);
            this._siftUp(this.values.length - 1);
        }
        peek() {
            return this.values[0];
        }
        pop() {
            if (this.values.length === 0) {
                console.error('Cannot pop an empty heap.');
                return;
            }
            this._swap(0, this.values.length - 1);
            this.values.pop();
            this._siftDown(0);
        }
        print() {
            console.log(this.values);
        }
        _siftUp(index) {
            if (index <= 0) return;
            const currVal = this.values[index];
            const parentVal = this._getParent(index);
            if (parentVal != null && currVal >= parentVal) {
                const parentIndex = this._getParentIndex(index);
                this._swap(index, parentIndex);
                this._siftUp(parentIndex);
            }
        }
        _siftDown(index) {
            if (index >= this.values.length) return;
            const currVal = this.values[index];
            const leftVal = this._getLeft(index);
            const rightVal = this._getRight(index);
            if (leftVal != null && rightVal != null) {
                if (leftVal >= rightVal && leftVal > currVal) {
                    const leftIndex = this._getLeftIndex(index);
                    this._swap(leftIndex, index);
                    this._siftDown(leftIndex);
                } else if (rightVal >= leftVal && rightVal > currVal) {
                    const rightIndex = this._getRightIndex(index);
                    this._swap(rightIndex, index);
                    this._siftDown(rightIndex);
                }
            } else if (leftVal != null && leftVal > currVal) {
                const leftIndex = this._getLeftIndex(index);
                this._swap(leftIndex, index);
                this._siftDown(leftIndex);
            } else if (rightVal != null && rightVal > currVal) {
                const rightIndex = this._getRightIndex(index);
                this._swap(rightIndex, index);
                this._siftDown(rightIndex);
            }
            // else they are both not null or they are both larger than curr val
        }
        _getParent(index) {
            const parentIndex = this._getParentIndex(index);
            if (parentIndex < 0) return null;
            return this.values[parentIndex];
        }
        _getParentIndex(index) {
            return Math.trunc((index - 1) / 2);
        }
        _getLeft(index) {
            const leftIndex = this._getLeftIndex(index);
            if (leftIndex >= this.values.length) return null;
            return this.values[leftIndex];
        }
        _getLeftIndex(index) {
            return index * 2 + 1;
        }
        _getRight(index) {
            const rightIndex = this._getRightIndex(index);
            if (rightIndex >= this.values.length) return null;
            return this.values[rightIndex];
        }
        _getRightIndex(index) {
            return index * 2 + 2;
        }
        _swap(index1, index2) {
            const tmp = this.values[index1];
            this.values[index1] = this.values[index2];
            this.values[index2] = tmp;
        }
    }

    const heap = new MaxHeap(nums);
    for (let i = 0; i < k - 1; i++) {
        heap.pop();
    }
    return heap.peek();
};