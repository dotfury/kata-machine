/*
BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
*/

// breadth first search

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const current = q.shift() as BinaryNode<number> | undefined | null;

    if (!current) {
      continue;
    }

    if (current.value === needle) {
      return true;
    }

    q.push(current.left);
    q.push(current.right);
  }

  return false;
}
