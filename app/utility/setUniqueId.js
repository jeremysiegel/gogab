// Based on watch and code

function setUniqueID() {
    var i, random;
    var uuid = "";
  
    for (i = 0; i < 32; i++) {
      // | operator ensures integer
      random = (Math.random() * 16) | 0;
  
      // 12th digit will always be 4. Converts to hexadecimal.
      uuid += (i === 11 ? 4 : random).toString(16);
    }
    return uuid;
  }
  
  export default setUniqueID;