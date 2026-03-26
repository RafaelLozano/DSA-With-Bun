class LinkedList {
  constructor() {
    this.head = null; // primer nodo
  }

  // Agregar al final
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Imprimir la lista
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " → ";
      current = current.next;
    }
    console.log(result + "null");
  }
}
