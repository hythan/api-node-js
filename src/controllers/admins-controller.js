import Admin from '../models/admin.js'

export default class AdminsController {

  static async index(_req, resp) {
    const admins = await Admin.all();
    resp.json(admins);
  }

  static async create(req, resp) {
    try {
      const admin = await Admin.create(req.body);
      resp.json(admin);
    } catch (e) {
      resp.json({ error: 'Error message' });
    }
  }

}
