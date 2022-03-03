const express = require('express');
const route = express.Router();
const indexController = require('./src/controllers/indexController')
const adminController = require('./src/controllers/adminController')


route.get('/', indexController.indexPage);
route.post('/', indexController.formPost);

route.post('/admins', adminController.createAdmin)
route.get('/admins', adminController.getAllAdmins)
route.patch('/admins/:id?', adminController.updateAdmin)
route.delete('/admins/:id?', adminController.deleteAdmin)


module.exports = route;