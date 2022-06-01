const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

// Routing /sign_in
router.get(
    '/sign_in',
    userController.isAuthen, 
    userController.sign_in
    );


// 
router.post('/sign_in', userController.sign_in_post);

// router.post(
//     '/sign_in', 
//     userController.authenticate,
//     (req,res) => {
//         res.redirect('http://localhost:3001/')
//     }
// );

// Routing /sign_out
router.get('/sign_out', userController.sign_out);

// Routing /sign_up
router.get('/sign_up', userController.sign_up);

router.post('/sign_up', userController.sign_up_post);


// Routing /forget_password
router.get('/forget_password', userController.forget_password);

// Routing /user/account/:slug
router.get('/account/:slug', userController.account);


// Routing /user/purchase
router.get('/purchase', userController.purchase);

// Routing /user/notifications
router.get('/notifications', userController.notifications);





router.get('/',
    userController.rerouting);

module.exports = router;