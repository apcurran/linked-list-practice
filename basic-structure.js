"use strict";

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new ListNode("A");
const b = new ListNode("B");
const c = new ListNode("C");
const d = new ListNode("D");

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL

function printLinkedList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        // update current's value
        current = current.next;
    }
}

printLinkedList(a);