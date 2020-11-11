function City(parks,streets){
    this.parks=parks;
    this.streets=streets; 
}

City.prototype.treeDensity=(trees,parkArea)=>{
    this.trees=trees;
    this.parkArea=parkArea;
    const treedens=trees/parkArea;
    console.log("Tree Density "+treedens);
}

City.prototype.averageAge=function(ages,numberOfParks){
    let avgAge=ages/numberOfParks;
    console.log("Average age in the town",avgAge);
}
City.prototype.parkNameMoreTrees=function(){
    
    console.log("Name of the park is National Park")
}
City.prototype.totalLength=function(){
    
    console.log("Total length")
}
City.prototype.averageLength=function(){
    console.log("average length")
}
City.prototype.sizeClassification=function(){
    console.log("Size classification tells Park 1 is the biggest"); 
}

var city= new City("National Park","North Aveneu");
city.parkNameMoreTrees();
city.treeDensity(1000,500);
city.averageAge(600,7);
city.parkNameMoreTrees();
city.totalLength();
