const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    let verticalLetters = transpose(letters);
    // console.log(verticalLetters)
    const verticalJoin = verticalLetters.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if(l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch


//take matrix function from yesterday
//


const transpose = function(matrix) {
    let finalArray = [];
    if (matrix.length === 1) {
      for (let i = 0; i < matrix[0].length; i++) {
        let singleArray = [];
        singleArray.push(matrix[0][i]);
        finalArray.push(singleArray);
      }
  
    } else {
      for (let i = 0; i < matrix.length; i++) {
        let individualArray = [];
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[j][i] !== undefined){
            individualArray.push(matrix[j][i]);
          }
        }
        finalArray.push(individualArray);
      }
    }
    return finalArray;
  };