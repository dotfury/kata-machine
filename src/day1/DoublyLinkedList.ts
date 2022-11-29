type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  public head?: Node<T>;
  public tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;

    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Index out of bounds");
    } else if (idx === this.length) {
      this.append(item);
    } else if (idx === 0) {
      this.prepend(item);
    }

    this.length++;
    const current = this.getAt(idx) as Node<T>;
    // attach new node
    // remove old links
    const node = { value: item } as Node<T>;
    node.next = current;
    node.prev = current.prev;
    current.prev = node;

    if (node.prev) {
      node.prev.next = current;
    }
  }

  append(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  remove(item: T): T | undefined {
    let current = this.head;

    for (let i = 0; current && i < this.length; ++i) {
      if (current.value === item) {
        break;
      }

      current = current.next;
    }

    if (!current) {
      return undefined;
    }

    return this.removeNode(current);
  }

  get(idx: number): T | undefined {
    const node = this.getAt(idx);
    return node?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) {
      return undefined;
    }

    return this.removeNode(node);
  }

  private getAt(idx: number): Node<T> | undefined {
    let current = this.head;
    for (let i = 0; current && i < idx; ++i) {
      current = current.next;
    }

    return current;
  }

  private removeNode(node: Node<T>): T | undefined {
    this.length--;

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this.head) {
      this.head = node.next;
    }

    if (node === this.tail) {
      this.tail = node.prev;
    }

    node.prev = node.next = undefined;

    return node.value;
  }
}
