
export class Login {
    constructor(
        public mobileNo: string,
        public password: string,
    ) { }
}

export class UserProfile {
    constructor(
        public firstName: string,
        public lastName: string,
        public mobileNo: string,
        public email: string,
    ) { }
}
