class Employee {
    id : number ;
    name : string ;

    constructor(id: number, name : string)
    {
        this.id= id ;
        this.name = name ;
    }
    display(): void {
        console.log(`Id =${this.id}, Name = ${this.name}`);

    }

}

let emp1 = new Employee ( 1, "steve");
emp1.display();