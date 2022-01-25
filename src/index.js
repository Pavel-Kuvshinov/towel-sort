
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    // My first decision

    /*
    let resultArr = [];

    if (typeof(matrix) === 'undefined') return resultArr;
    
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
          if(i % 2 == 0){
          resultArr.push(matrix[i][j]);
          } else {
          resultArr.push(matrix[i][(matrix[i].length-1)-j]);
          }
          
      }
    }
  
    return resultArr;
    */

    //My second decision

    typeof(matrix) === 'undefined' ? [] : matrix.map((item, ind) => (ind % 2 === 0) ? item : item.reverse()).flat();
}
