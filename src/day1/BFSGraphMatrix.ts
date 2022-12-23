export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const previous = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const current = q.shift() as number;

    if (current === needle) {
      break;
    }

    const adjacencies = graph[current];
    for (let i = 0; i < graph.length; i++) {
      if (adjacencies[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      previous[i] = current;
      q.push(i);
    }
  } while (q.length);

  // build it backwards
  let current = needle;
  const out: number[] = [];

  while (previous[current] !== -1) {
    out.push(current);
    current = previous[current];
  }

  if (out.length) {
    // don't forget to add the source
    return [source].concat(out.reverse());
  }

  return null;
}
