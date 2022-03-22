import prisma from '../../prisma/client.js'

export default class Admin {

  static async all() {
    return await prisma.admin.findMany();
  }

  static async create(data) {
    return await prisma.admin.create({ data: data });
  }
}
