// input: head of singly ll
// return: reversed list
function reverseList(head) {
  // 1>2>3>4>5
  // 5>4>3>2>1

  // init: null>1>2>3>4>5>null
  // (1>null) (2>1) (3>2) (4>3) (5>4)
  // prev: (4,3)
  // curr: (5,4)
  // next: null

  // Time: O(n)
  // Space: O(1)

  // initialize pointers
  // iterate through linked list; break if curr is null
      // store next node variable
      // change curr->next to prev node
      // change curr node to next node
  // return reversed linked list from tail, which is prev after the last iteration

  // questions: how is the linked list represented? how is each node represented?

  let prev = null;
  let curr = head;
  while (curr != null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  return prev;
}