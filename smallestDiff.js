let smallest = (arr1, arr2) => {
   let smallestDiff = []
   a.sort((a, b) => a - b);
   b.sort((a, b) => a-b) 

   console.log(a, b)

   let a1 = 0, b1 = 0

   let result = Number.MAX_SAFE_INTEGER
    
   while (a1 < a.length && b1 < b.length) {
    if (Math.abs(a[a1] - b[b1]) < result) 
    result = Math.abs(a[a1] - b[b1]);

    if (a[a1] < b[b1]){
        a1++
    }else b++
    }
    return result
}

const a = [10, 20, 14, 16, 18]
const b = [30, 23, 54, 33, 96]

console.log(smallest(a, b))
