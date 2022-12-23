function walk(
  graph: WeightedAdjacencyList,
  current: number,
  needle: number,
  seen: boolean[],
  path: number[],
) {
  if (seen[current]) {
    return false;
  }

  seen[current] = true;

  // recurse
  // pre
  path.push(current);
  if (current === needle) {
    return true;
  }

  // recurse
  const list = graph[current];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];

    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }

  return path;
}
