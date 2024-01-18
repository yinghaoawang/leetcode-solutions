/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // we want the heavest 2 stones
    // use a max heap
    // root has heaviest stone, l or r child has 2nd heaviest stone
    
    // fn: smashing the rock together
        // if they are not equal, set 2nd heaviest child value to (heavy-2ndheavy), heapify 2nd heaviest, pop heaviest, heapify
        // if they are equal, pop, heapify, pop, heapify

    // main: iterate through heap until length is <= 1
        // run smash rock algorithms

    // lets say i didn't know this was a heap problem, what would i think?
    // id search for greatest value and 2nd greatest value every iteration, so O(n)
    // then i thikn about how they use the 2 heaviest, so i'm thinking a trie
    // a trie has get max O(1) and get 2nd max O(1) and remove max O(1)

    const heap = new Heap();
    for (let value of stones) {
        heap.insert(value);
    }

    console.log('start', heap);
    while (heap.length() > 1) {
        const maxValue = heap.peek();
        const max2ndValue = heap.peekSecond();
        const diff = maxValue - max2ndValue;
        if (diff === 0) {
            heap.pop();
            heap.pop();
        } else {
            heap.pop();
            heap.pop();
            heap.insert(diff);
        }
    }
    return heap.length() === 0 ? 0 : heap.peek();
};

class Heap {
    constructor() {
        this.values = [];
    }

    length() {
        return this.values.length;
    }

    swap(index1, index2) {
        const tmp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = tmp;
    }
    //       8
    //    7    4
    //   1 2  1

    //    0
    //   1 2
    //  34 56
    insert(value) {
        const bubbleUp = (index) => {
            const parentIndex = Math.floor((index - 1) / 2);
            if (parentIndex < 0) return;
            const parentValue = this.values[parentIndex];
            const currValue = this.values[index];
            if (parentValue < currValue) {
                this.swap(parentIndex, index);
                bubbleUp(parentIndex);
            }
        }
        this.values.push(value);
        bubbleUp(this.values.length - 1);
    }

    // returns highest value
    peek() {
        return this.values[0];
    }

    // returns second highest value, returns null if doesnt exist
    peekSecond() {
        if (this.values[1] == null) return null;
        if (this.values[2] == null) return this.values[1];
        // now i know l and r child are not null otherwise it would have returned
        return Math.max(this.values[1], this.values[2]);
    }

    pop() {
        //       8
        //    7    4
        //   1 2  1

        //       7
        //    2    4
        //   1 1
        
        // swap values of head with last node
        // remove last node
        // heapify at root
        const exists = (index) => index > -1 && index < this.values.length;
        const swappable = (index, swapIndex) => {
            if (!exists(swapIndex)) return false;
            return this.values[swapIndex] > this.values[index];
        }
        
        const heapify = (index) => {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            const leftSwappable = swappable(index, leftIndex);
            const rightSwappable = swappable(index, rightIndex);
            if (leftSwappable && rightSwappable) {
                const leftValue = this.values[leftIndex];
                const rightValue = this.values[rightIndex];
                if (leftValue > rightValue) {
                    this.swap(index, leftIndex);
                    heapify(leftIndex);
                } else {
                    this.swap(index, rightIndex);
                    heapify(rightIndex);
                }
            } else if (leftSwappable) {
                this.swap(index, leftIndex);
                heapify(leftIndex);
            } else if (rightSwappable) {
                this.swap(index, rightIndex);
                heapify(rightIndex);
            }
            // otherwise neither are swappable
        }
        // assume length > 0
        this.swap(0, this.values.length - 1);
        this.values.pop();
        heapify(0);
    }
}