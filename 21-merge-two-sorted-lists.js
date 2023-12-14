// input: head of 2 sorted linked lists: list1, list2
// return: head of sorted linked list of list1 and list2 merged
// constraints: result must consist of list1 and list2 spliced elements
function mergeTwoLists(list1, list2) {
  // 1 2 4 ||||| 1 3 4
  // 1 1 2 3 4 4

  // l1: 1 2 4 ||||| l2: 1 3 4
  // p1: N p2: 4
  // l3: 1 1 2 3 4 4
  
  // initialize two pointers for each list
  // initialize a prev node, and head node variable as null
  // iterate through both lists at the same time; break when both are null
      // determine which pointer has a larger value, set is as curr
      // set next = curr.next
      // if prev node is null:
          // set head = curr
      // else prev node is not null:
          // prev.next = curr
      // set prev = curr
      // set curr = next
  // after iteration, both pointers are null, so we have iterated through both lists and created a sorted merged ll,
  // so we return head

  // Time: O(n + m)
  // Space: O(1)

  let p1 = list1, p2 = list2, prev = null, head = null;
  while (p1 != null || p2 != null) {
      const curr = getSmallerPointer(p1, p2);
      const next = curr.next;
      if (prev == null) {
          head = curr;
      } else {
          prev.next = curr;
      }
      prev = curr;
      if (p1 == curr) p1 = next;
      else if (p2 == curr) p2 = next;
      else throw new Error('Both pointers are not curr node')
  }

  return head;
}

function getSmallerPointer(p1, p2) {
  if (p1 == null) return p2;
  else if (p2 == null) return p1;
  else if (p1 == null && p2 == null) throw new Error('Both pointers are null');


  if (p1.val < p2.val) return p1;
  else return p2;
}