/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let start = null;
  let prev = null;
  curr = head;
  forward = head.next;
  furthest = forward.next;

  while (forward) {
    forward.next = curr;
    curr.next = furthest;

    if (prev) prev.next = forward;

    if (!start) start = forward;

    prev = curr;
    curr = furthest;
    forward = curr ? curr.next : null;
    furthest = forward? forward.next : null; 
  }

  return start;
};