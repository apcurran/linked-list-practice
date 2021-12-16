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

function linkedListValues(head) {
    let valuesArr = [];
    let current = head;

    while (current !== null) {
        valuesArr.push(current.val);
        current = current.next;
    }

    return valuesArr;
}

console.log( linkedListValues(a) ); // [ 'A', 'B', 'C', 'D' ]