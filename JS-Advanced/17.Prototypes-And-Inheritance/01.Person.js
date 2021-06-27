class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        Object.defineProperty(this, 'fullName', {
            enumerable: true,
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(value) {
                [this.firstName, this.lastName] = value.split(' ');
            }
        });
    }
}

let person = new Person("Peter", "Ivanov");

console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName); 
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName);