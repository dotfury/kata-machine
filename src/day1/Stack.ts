type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    const newItem = { value: item } as Node<T>;

    if (!this.head) {
      this.head = newItem;
      return;
    }

    newItem.prev = this.head;
    this.head = newItem;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;

      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
