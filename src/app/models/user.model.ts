export class User {
    constructor(
        public name: String,
        public surname: String,
        public email: String,
        public dni: String,
        public smartphone: Array<String>,
        public password: String,
        public dir?: String,
        public dir_num?: String,
        // public nick: String,
        public image?: String,
        public role?: String,
        public observation?: String,
        public _id?: string
        // public gettoken: boolean
    ) {}
}
