console.log("Ques 2")

class User {
    constructor (name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.upcoins = 0;
        this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

    addcoins(){
    this.upcoins ++;
    console.log(`${this.name} has ${this.upcoins} coins`);
    return this;
    
    }}

class Moderator extends User{
addCoin(user,coin){
    user.upcoins.push(coin);
    console.log(user);
        }
    }
    


class Admin extends Moderator {
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
}
    let user1= new User('kunj',24,'kunj@gmail.com')
    user1.login().addcoins().addcoins()

    let user2= new User('shah',25,'shah@gmail.com')
    user2.login().addcoins().addcoins().addcoins().addcoins()

    let mod = new Moderator('Samir',36,'samir@upgrade.com')

    let admin = new Admin('Riya',40,'riya@letsupgrade.com')

    let users = [user1,user2,mod,admin]

    

    users.forEach(element => {
       console.log(element);
    })

    admin.addCourse(user1,'javaScript')
    admin.addCourse(user1,'Python')

    mod.addCoin(user1,1)