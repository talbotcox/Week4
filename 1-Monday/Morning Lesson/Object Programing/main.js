function breakfast (name,sweetness,crunchFactor,mascotName){
    this.name = name
    this.sweetness = sweetness
    this.crunchFactor = crunchFactor
    this.mascotName = mascotName
}

var items = new breakfast(
    "CapCrunch",
    99,
    50,
    "Cap"
    )
    
console.log(items)