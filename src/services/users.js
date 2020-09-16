export default class UsersService {

    usersData = [
        {login: 'Admin', password: '54321', admin: true},
        {login: 'Женя', password: '12345'}]

    getUsers = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.usersData)
                reject(new Error('Список пользователей не корректен'))
            }, 200)
        })
    }
}


