export default function animals(heads, legs){
  if ((heads === 0) && (legs === 0)) { 
    return [0,0]
  };

  const cows = (legs - 2 * heads) / 2;
  const chickens = heads-cows;

  if ( (cows >= 0) && (chickens >= 0) && (cows % 1 === 0) && (chickens % 1 === 0) && ( (cows+chickens) != 0) ) {
    return [chickens, cows];
  } else {
    return "No solutions";
  };
};
