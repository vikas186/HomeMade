const express = require('express')
const router = express.Router();
const Productcontroller = require('../controller/product.controller');
const uploadImage = require('../middleware/fileupload');
const jwtVerify = require('../middleware/jwt');


// create Product route


/**
 * @swagger
 * /api/product/create:
 *   post:
 *     tags:
 *       - product
 *     summary: Create product
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               latitute:
 *                 type: string
 *               longitute:
 *                 type: string
 *               categoryID:
 *                 type: array
 *               userRating:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - image
 *               - title
 *               - categoryID
 *               - userRating
 *               - phone
 *               - content
 *               - latitute
 *               - longitute
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
router.post('/product/create', uploadImage.single("image"), jwtVerify, Productcontroller.createProduct );


// get product route


/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     tags:
 *       -  product
 *     summary: Find a product by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the product
 *         required: true
 *         schema:
 *           type: string
 *         example: ytfuigiohilkhilh
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
router.get('/product/:id', jwtVerify, Productcontroller.getProduct);



// getall product route


/**
 * @swagger
 * /api/product:
 *   get:
 *     tags:
 *       -  product
 *     summary: 'Get all products'
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

router.get('/product', jwtVerify, Productcontroller.getAllProduct);



// update product route


/**
 * @swagger
 * /api/product/update:
 *   put:
 *     tags:
 *       - product
 *     summary: update a product post
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               id:
 *                 type: string
 *               latitute:
 *                 type: string
 *               longitute:
 *                 type: string
 *               categoryID:
 *                 type: string
 *               userRating:
 *                 type: string
 *               phone:
 *                 type: string
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

router.put('/product/update', uploadImage.single("image"),jwtVerify, Productcontroller.updateProduct);



// delete product route


/**
 * @swagger
 * /api/product/delete:
 *   delete:
 *     tags:
 *       -  product
 *     summary: 'product'
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
router.delete('/product/delete', jwtVerify, Productcontroller.destroyProduct);

module.exports = router