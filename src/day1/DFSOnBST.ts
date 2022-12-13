function search(current: BinaryNode<number> | null, needle: number): boolean {
  if (!current) {
    return false;
  }

  if (current.value === needle) {
    return true;
  }

  // search for larger value
  if (current.value < needle) {
    return search(current.right, needle);
  }

  // search for smaller value
  return search(current.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
