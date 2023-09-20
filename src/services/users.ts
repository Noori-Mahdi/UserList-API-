import { UserType } from "../model/types";
import axios from "axios";

class UserServices {

http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

async getUsers(){
    const response = await this.http.get<UserType[]>('users');
    return response.data;
}

async removeUsers(id:number){
    const response = await this.http.delete<UserType>('users' + id);
    return response.data;
}

async addUser({name,username,email}:UserType){
    let data = {name,username,email};
    const response = await this.http.post('users',data);
    return response.data;
}





// async addUsers(title:string){
//     const response = await this.http.post<UserType>('todos',{title})
//     return response.data;
// }


}

export default new UserServices;