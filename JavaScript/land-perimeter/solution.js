function landPerimeter(arr) {
    var perimeter = 0;
    for (let x = 0; x < arr.length; x++) {
    
      for (let y = 0; y < arr[x].length; y++) {
        if (arr[x][y] === "X") {
          if (arr[x-1] === undefined) {
            perimeter++;
          } else {
            if (arr[x-1][y] !== "X") {
              perimeter++;
            }
          }
          if (arr[x+1] === undefined) {
            perimeter++;
          } else {
            if (arr[x+1][y] !== "X") {
              perimeter++;
            }
          }
          if (arr[x] === undefined) {
            perimeter++;
          } else {
            if (arr[x][y-1] !== "X") {
              perimeter++;
            }
            if (arr[x][y+1] !== "X") {
              perimeter++;
            }
          }
        }
      }
    }
    return `Total land perimeter: ${perimeter}`;
    }

    console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]));