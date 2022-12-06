/*
BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
*/

// in order: traverse left, visit node, traverse right

function walk(current: BinaryNode<number> | null, path: number[]): void {
  // can no longer recurse
  if (!current) {
    return;
  }

  // recurse
  walk(current.left, path);
  path.push(current.value);
  walk(current.right, path);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
