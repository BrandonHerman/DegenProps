import { findSourceMap } from 'module';
import whiteList from '../Whitelist.json';

function isPresent(permittedUsers: any, values) {
            console.log(values);
    for (let i = 0; i < permittedUsers.length; i++) {
            console.log(permittedUsers[i]);
        if (values.username === permittedUsers[i].username) {
            if (values.password === permittedUsers[i].password) {
                return true;
            }
        }
    }
    return false;
    // return members.username === username && members.password === password; 
}
export const loginViaWhiteList = (values) => {
    const stringUsers = JSON.stringify(whiteList);
    const permittedUsers = JSON.parse(stringUsers);
    console.log(isPresent(permittedUsers, values));
}