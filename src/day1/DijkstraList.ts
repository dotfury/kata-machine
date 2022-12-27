function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let index = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      index = i;
    }
  }

  return index;
}

export default function Dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList,
): number[] {
  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dists = new Array(arr.length).fill(Infinity);

  // the distance to the start is always zero
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const current = getLowestUnvisited(seen, dists);
    seen[current] = true;

    const adjs = arr[current];
    for (let i = 0; i < adjs.length; ++i) {
      const edge = adjs[i];

      if (seen[edge.to]) {
        continue;
      }

      const distance = dists[current] + edge.weight;
      if (distance < dists[edge.to]) {
        dists[edge.to] = distance;
        prev[edge.to] = current;
      }
    }
  }

  const out: number[] = [];
  let current = sink;

  while (prev[current] !== -1) {
    out.push(current);
    current = prev[current];
  }

  out.push(source);
  return out.reverse();
}
