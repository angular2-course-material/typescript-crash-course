
function helloWorld(person: Person) {
    return `Hello world, ${person.firstname} ${person.lastname}`;
}

interface Person {
    firstname: string;
    lastname: string;
}

class Student {
    firstname: string;
    middlename: string;
    lastname: string;

    constructor(firstname: string, middlename: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
    }
}

let dann = new Student('dann', 'ale', 'meneses');

document.body.innerHTML = helloWorld(dann);
