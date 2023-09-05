const express = require('express')
const router = express.Router();
const Categorycontroller = require('../controller/category.controller');
const jwtVerify = require('../middleware/jwt');

// create category route

/**
 * @swagger
 * /api/category/create:
 *   post:
 *     tags:
 *       - category
 *     summary: Create category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *             required:
 *               - categoryName
 *               - isStatus
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
router.post('/category/create', jwtVerify, Categorycontroller.createCategory );

// get category route

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     tags:
 *       -  category
 *     summary: Find a category by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category
 *         required: true
 *         schema:
 *           type: string
 *         example: hs-no-35-mohali-address
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/category/:id', jwtVerify, Categorycontroller.getCategory);

// getall category route

/**
 * @swagger
 * /api/category:
 *   get:
 *     tags:
 *       -  category
 *     summary: 'Get all Category'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.get('/category', jwtVerify, Categorycontroller.getAllCategory);

// update category route

/**
 * @swagger
 * /api/category/update/:
 *   put:
 *     tags:
 *       - category
 *     summary: 'Update category'
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *               categoryName:
 *                 type: string
 *                 example: "Category Name"
 *               isStatus:
 *                 type: boolean
 *                 example: "true"
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.put('/category/update', jwtVerify, Categorycontroller.updateCategory);

// delete category route

/**
 * @swagger
 * /api/category/delete:
 *   delete:
 *     tags:
 *       -  category
 *     summary: 'Delete category'
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/category/delete', jwtVerify, Categorycontroller.destroyCategory);

module.exports = router
