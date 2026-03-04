export default function insertionSort(array) {
  let animations = [];
  let arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0) {

      // comparison step
      animations.push({
        type: "compare",
        indices: [j - 1, j]
      });

      if (arr[j - 1] > arr[j]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;

        // record swap
        animations.push({
          type: "swap",
          indices: [j - 1, j]
        });

        j--;
      } else {
        break;
      }
    }
  }

  return animations;
}
