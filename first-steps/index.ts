import {Person} from './person';
import {Student} from './student';

function helloWorld(person: Person) {
    return `Hello world, ${person.firstname} ${person.lastname}`;
}

let dann = new Student('dann', 'ale', 'meneses');

document.body.innerHTML = helloWorld(dann);
