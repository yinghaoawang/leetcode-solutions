// input: head of linked list
// output: bool cycle exists in ll
function hasCycle(head) {
  // detecting a cycle in a i can use a fast and slow pointer method
  // slow pointer jumps one node each iteration, and the fast pointer jumps two nodes each iteration
  // if a fast pointer and slow pointer point to the same object, then there must be a cycle

  // 3 2 0 4 2 0 4 2 0 4 2 0 4 ...
  // s: 3 2 0 4
  // f: 2 4 2 4

  // 1 2 1 2 1 2
  // s: 1 2
  // f: 2 2

  // instantiate fast and slow pointers
  let s = head, f = head;
  // if s or f is null, then there isn't a cycle
  while (f != null && s != null) {
      s = s.next;
      f = f.next?.next; // optional chaining ensures no errors, and result is still the same (f will be null and the function returns false in the next iteration)
      if (f === s) return true;
  }

  return false;
};