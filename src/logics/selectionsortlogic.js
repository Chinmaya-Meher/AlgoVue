export default function selectionsort(array) 
{
  let animations = [];
  let arr = [...array];

  for (let i = 0; i < arr.length-1; i++) {
    let minindx=i;
    for (let j = i+1; j < arr.length; j++) {

      // comparison step
      animations.push({
        type: "compare",
        indices: [i, j]
      });

      if (arr[j] < arr[minindx]) {
        
        minindx=j
        
      }
      
    }
    let temp = arr[i];
        arr[i] = arr[minindx];
        arr[minindx] = temp;

    animations.push({
          type: "swap",
          indices: [i, minindx]
        });
  }

  return animations;
}
