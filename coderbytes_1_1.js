function CommandLine(str) { 

  // code goes here
  var output = [];
  var parts = str.split("=");
  var subparts = [];
  var keys = [];
  var vals = [];
  var i, j = 0;

  for(i = 0; i < parts.length; i++) {
    subparts[i] = parts[i].split(" ")
    for (j = 0; j < subparts[i].length; j++) {
      //console.log(subparts[i][j])
      //console.log("")       
    }
  }

  for(i = 0; i < parts.length - 1; i++) {
    keys[i] = subparts[i][subparts[i].length - 1]
    //console.log(keys[i])
    //console.log("")
  }
  console.log("")

  for(i = 0; i < parts.length; i++) {
    //vals[i] = parts[i].substring(0, parts[i].length - keys[i].length - 1)
    if (parts[i + 1] != null){
      vals[i] = parts[i + 1].substring(0, parts[i + 1].length - keys[i].length - 1)
      if (i == parts.length - 2) {
        vals[i] = parts[i + 1].substring(0, parts[i].length - keys[i].length)
      }
    //console.log(vals[i])
    }
  }
  /*
  for(i = 0; i < parts.length - 1; i++) {
    if(subparts[i+1] != null) {
      if(subparts[i+2]!= null) {
        subparts[i+1].pop()
      }
      
      vals[i] = subparts[i+1].join() //substring(0, subparts[i+1].length - keys[i+1].length)
      console.log(vals[i])
    }
  }
  */
    

  /*
  output = keys.map(function(i, j) {
    return [i, vals[j]];
  });



  subparts[i].substring(parts[i].length - , parts[i].length)

  parts.forEach(item => {
    //console.log(item)
    subpart = item.split(" ")    
    //console.log(subpart[subpart.length - 1])
    
    keys[i] = subpart[subpart.length - 1]
    //vals[i] = item.substring(0, (item.length - keys[i].length) - 1)
    i++
  });

  parts.forEach(item => {   
    vals[j] = item.substring(0, (item.length - keys[j].length) - 1)
    j++
  });
  */
  
  for(i = 0; i < keys.length; i++) {
    console.log(keys[i])
    console.log(vals[i])
    console.log(keys[i].length)
    console.log(vals[i].length) 
    console.log("")
  }

  //return str; 
  return output

}
   
// keep this function call here 
console.log(CommandLine(readline()));