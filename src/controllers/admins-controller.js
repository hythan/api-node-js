import Admin from '../models/admin.js';

export default class AdminController {
    static async index(req, res) {
        const admins = await Admin.all();
        res.json(admins);
    }

    static async create(req, res) {
        try{
            const admin = await Admin.create(req.body);
            res.json(admin);
        }catch(err){
            res.json({error: err.message});
        }
    }

    static async update(req, res) {
        try{
            const admin = await Admin.update(req.params.id,req.body);
            res.json(admin);
        } catch(err){
            res.json({error: err.message});
        }
    }

    static async delete(req, res) {
        try{
            const admin = await Admin.delete(req.params.id);
            res.json(admin);
        }catch(err){
            res.json({error: err.message});
        }
    }
    
}

// exports.getAllAdmins =  async (req, res) => {
//      let allAdmins =  await prisma.admin.findMany()
//         .catch(e => console.error(e))
//         .finally(async () =>{
//             await prisma.$disconnect()
//         })

//      res.send(allAdmins)
// }

// exports.createAdmin = async (req, res) => {
//     let {name, password, email} = req.body;
//     let response = await prisma.admin.create({
//         data: { email: email, password: password, name: name}
//     })
//     .catch(e => console.error(e))
//     .finally(async () => {
//         await prisma.$disconnect()
//     })   
//     console.log(response) 
//     res.send(`Admin ${name} criado com sucesso`);
// }

// exports.updateAdmin = async (req, res) => {
//     let id = parseInt(req.params.id);
//     let {name, password, email } = req.body;
//     let response = await prisma.admin.update({
//         where: {id: id},
//         data: {
//             name: name,
//             password: password, 
//             email: email
//         }
//     }).catch(e=> console.log(e))
//     .finally(async () => {
//         await prisma.$disconnect()
//     })
//     console.log(response);
// }

// exports.deleteAdmin = async (req, res) => {
//     let id = parseInt(req.params.id);
//     let response = await prisma.admin.delete({
//         where: {id: id}
//     }).catch(e => console.log(e))
//     .finally( async () =>{
//         await prisma.$disconnect();
//     })
//     console.log(response)
// }