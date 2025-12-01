class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert_at_beginning(element) {
    const node = new Node(element);
    node.next = this.head;
    this.head = node;
  }

  traverse() {
    let current = this.head;
    let output = "";

    while (current) {
      output += current.value + " ";
      current = current.next;
    }
    return output;
  }

  insert_at_end(element) {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insert_after(target, element) {
    let current = this.head;
    while (current) {
      if (current.value === target) {
        const node = new Node(element);
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
    console.log("Target not found");
  }

  // --- FIXED SEARCH METHOD ---
  search(element) {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        return "Element Found: " + current.value;
      }
      // Continue to the next node if not found yet
      current = current.next;
    }
    // Only return "not found" if the loop finishes completely
    return "Element not found";
  }
}

// --- USAGE ---
let list1 = new LinkedList();
list1.insert_at_end(4);
list1.insert_at_end(3);
list1.insert_at_end(5);
list1.insert_after(5, 2);

console.log(list1.traverse()); 
// Output: 4 3 5 2 

console.log(list1.search(4)); 
// Output: Element Found: 4