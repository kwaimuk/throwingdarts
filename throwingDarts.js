var throwingDarts = function (collection){
  var score = null;
  var bonusPoints = 100;
  var lessThanFive = [];
  if(collection.length === 0){
    return -1;
  } else if(collection.length > 0){

      for(var i = 0; i<collection.length; i++){
        if(collection[i] > 10){
        score += 0;
          }else if(collection[i] >= 5 && collection[i] <= 10){
          score += 5;
            }else if(collection[i] < 5 ){
            score += 10;
            lessThanFive.push(collection[i]);
            }
      }

  if(lessThanFive.length === collection.length){
    score += bonusPoints;
  }

  }


return score;
};





module.exports = throwingDarts;