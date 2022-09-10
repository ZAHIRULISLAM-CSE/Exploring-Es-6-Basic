class Fathername{
    constructor(){
        this.fname="Abc"
    }
}

class Name extends Fathername{ 
    constructor(name){
        super();
        this.name=name;

    }
}

var name=new Name("Joy");
console.log(name);