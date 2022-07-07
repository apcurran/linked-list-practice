"use strict";

class ListNode {
    /**
     * @param {any} val 
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // init with an empty list
        this.head = null;
    }

    /**
     * @param {any} val 
     * @returns {void}
     */
    append(val) {
        // is this the first item in the list head === null ?
        if (this.head === null) {
            // add node as head
            this.head = new ListNode(val);
            // exit method early
            return;
        }

        let curr = this.head;

        // traverse through list as long as the next pointer is not null
        while (curr.next !== null) {
            curr = curr.next;
        }
        // after loop finishes, we hit the tail of the list
        // add to end of list
        curr.next = new ListNode(val);
    }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

console.log(list);
