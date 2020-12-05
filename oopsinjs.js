class Vehicle { 
    constructor(name, manufacturer, model) { 
      this.name = name; 
      this.manufacturer =  manufacturer; 
      this.model = model; 
    } 
    getDetails(){ 
        return (`The name of the bike is ${this.name}.`) 
    } 
    getmore(){
        return (`The manufactuere  of the bike is ${this.manufacturer}.`) 
    }
  } 
 
  let b1 = new Vehicle('Splendor', 'Hero', '1340cc'); 
  let b2 = new Vehicle('Discover', 'Bajaj', '998cc'); 
    
  console.log(b1.name);    
  console.log(b1.manufacturer);   
  console.log(b2.getDetails()); 
  
  console.log(b1.getDetails());
  console.log(b2.getmore());