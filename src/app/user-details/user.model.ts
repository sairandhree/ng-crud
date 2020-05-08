export class User {
    name: string;
    email: string;
    phonenumber ?: number | string;
    dateOfBirth ?: object;

    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}