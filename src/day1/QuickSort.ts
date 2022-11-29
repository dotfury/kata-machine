function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  console.log("LO: ", lo);
  console.log("HI: ", hi);

  const pivotIndex = partition(arr, lo, hi);
  console.log("PIVOT INDEX: ", pivotIndex);
  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let index = lo - 1;
  console.log("current index: ", index);
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      console.log(`arr[${i}]: ${arr[i]} smaller than pivot: ${pivot}`);
      index++;
      console.log("i: ", i);
      console.log("new index: ", index);
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;

      console.log("new array: ", arr);
    }
  }

  index++;

  console.log(`swap ${arr[index]} and ${pivot}`);
  arr[hi] = arr[index];
  arr[index] = pivot;

  console.log("ARRAY: ", arr);

  return index;
}

export default function quick_sort(arr: number[]): void {
  console.log("START: ", arr);
  qs(arr, 0, arr.length - 1);
}
