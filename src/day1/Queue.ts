type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;
    const newItem = { value: item } as Node<T>;
    if (!this.tail) {
      this.head = this.tail = newItem;
      return;
    }

    this.tail.next = newItem;
    this.tail = newItem;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = head.next;
    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
