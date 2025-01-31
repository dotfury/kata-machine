/*
BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};
*/

// pre order: visit node, traverse left, traverse right

function walk(current: BinaryNode<number> | null, path: number[]): void {
  // can no longer recurse
  if (!current) {
    return;
  }

  // pre
  path.push(current.value);

  // recurse
  walk(current.left, path);
  walk(current.right, path);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);

  return path;
}
