import prisma from '../../prisma/client.js';

export default class Admin {
    static async all() {
        return await prisma.admin.findMany();
    }

    static async create(data) {
        return await prisma.admin.create({data: data});
    }

    static async update(id, data) {
        return await prisma.admin.update({
            where: {id: parseInt(id)},
            data: data
        });
    }

    static async delete(id) {
        return await prisma.admin.delete({
            where: {id: parseInt(id)}
        });
    }
}