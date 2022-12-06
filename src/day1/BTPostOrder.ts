/*
BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
*/

// post order: traverse left, traverse right, visit node

function walk(current: BinaryNode<number> | null, path: number[]): void {
  // can no longer recurse
  if (!current) {
    return;
  }

  // recurse
  walk(current.left, path);
  walk(current.right, path);
  path.push(current.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
