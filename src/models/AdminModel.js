const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient()
class Admin {
    async getAll(){
        let response = await prisma.admin.findMany()
        .catch(e => console.error(e))
        .finally(async () =>{
            await prisma.$disconnect()
        })

        return response;
    }

    async createAdmin(name, email, password) {
        let response = await prisma.admin.create({
            data: { email: email, password: password, name: name}
        })
        .catch(e => console.error(e))
        .finally(async () => {
            await prisma.$disconnect()
        })   
        console.log(response) 
    }

    async update(){
        return 'update';
    }
}

module.exports = Admin;