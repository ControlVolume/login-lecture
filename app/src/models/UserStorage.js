"use strict";


//실제로는 DB에 있어야하는 정보
class UserStorage {
    static #users = {
        id: ["test1", "test2", "test3"],
        psword: ["1234","12345","123456"],
        name: ["호날두", "메시", "손흥민"],
    };


    // DB 로 접근하는 로직
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;