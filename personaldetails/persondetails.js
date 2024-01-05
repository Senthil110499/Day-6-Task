
class Person {
    constructor(
        firstName = "Senthil",
        lastName = "S",
        email="ssenthil8760650010@gmail.com",
        age = 24,
        mobile = 8760650010,
        country = "India",
        city = "Tiruppur",
        state = "Tamilnadu",
        pincode = 642201,
        interest = "Web Developer",
        technical = "C,AutoCAD",
        language = "Tamil,English",
        hobbies = "Playing Cricket",
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.mobile = mobile;
        this.country = country;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
        this.interest = interest;
        this.technical = technical;
        this.language = language;
        this.hobbies = hobbies;
    }
}

const person1 = new Person();
const person2 = new Person("Guvi","Geek","Guvigeek123@gmail.com",18,9876543210,"India","Chennai",642126,"MERN Stock","JS","Coding Language");

console.log(person1);
console.log(person2);

console.log(person1.age);
console.log(person2.interest);

console.log(`All the Person Names are 
"person1" : ${person1.firstName}
"person2" : ${person2.firstName}`);