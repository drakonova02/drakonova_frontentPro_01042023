// ваш код
class Person {
    constructor (name, age, gender) {
        const genderVariant = ['male', 'female', 'no-binary'];

        if((typeof name) === 'string' && name?.trim()) {
            this.name = name;
        } else {
            throw new Error('No valid name');
        }

        if(!isNaN(age) && age > 0) {
            this.age = age;
        } else {
            throw new Error('No valid age');
        }

        if((typeof gender) === 'string' && genderVariant.includes(gender)) {
            this.gender = gender;
        } else {
            throw new Error('No valid gender');
        }
    }

    *[Symbol.iterator]() {
        for (const property in this) {
            yield `${property} is ${this[property]}`;
        }
    }
}

try {
    const person = new Person('John Doe', 30, "male"); 

    for (const property of person) {
        console.log(property);
    }
}
catch(err) {
    console.error(err);
}