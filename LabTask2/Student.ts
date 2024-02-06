class Student {

    name : string ;
    id: number;
    course : string ;

    constructor( id: number, name :string , course :string ){
        this.name= name;
        this.id = id;
        this.course = course ;
    }

    display () : void {

        console.log ( `Name = ${this,name}, I`)
    }
}