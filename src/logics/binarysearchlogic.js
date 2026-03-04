export default function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let animations = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Checking step (yellow glow on mid)
    animations.push({
      left,
      right,
      index: mid,
      type: "checking",
    });

    if (arr[mid] === target) {
      // Found step (green)
      animations.push({
        index: mid,
        type: "found",
      });
      return animations;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Not found
  animations.push({
    type: "missing",
  });

  return animations;
}
