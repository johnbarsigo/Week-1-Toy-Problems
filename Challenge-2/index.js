function speedDetector( speed ){
    const limit = 70;
    const divider = 5;
    if (speed < limit) {
      console.log("Ok");
    } else {
      const points = Math.floor((speed - limit) / divider);
      //Math.floor() returns a whole integer value by rounding up/ down
      console.log(`Points: ${points}`);
      if ( points > 12){
        console.log("License suspended!");
      }
    }
}
console.log(speedDetector(80))