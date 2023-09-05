const express = require('express')
const router = express.Router();
const UserController = require('../controller/users.controller');
const jwtVerify = require('../middleware/jwt');

//  Create signup route

/**
 * @swagger
 * /api/signup:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: rishab
 *               email:
 *                 type: string
 *                 example: rishab@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.post('/signup', UserController.signup);

// Create Login Route

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: rishab@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.post('/login', UserController.login);


/**
 * @swagger
 * /api/userProfile:
 *   get:
 *     tags:
 *       - User Auth
 *     summary: userProfile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.get('/userProfile', jwtVerify, UserController.userProfile);

module.exports = router