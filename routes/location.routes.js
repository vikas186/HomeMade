const express = require('express')
const router = express.Router();
const Locationcontroller = require('../controller/location.controller');
const jwtVerify = require('../middleware/jwt');

// create location route

/**
 * @swagger
 * /api/location/create:
 *   post:
 *     tags:
 *       - location
 *     summary: Create location
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *               latitute:
 *                 type: string
 *               longitute :
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *             required:
 *               - cityName
 *               - isStatus
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
router.post('/location/create', jwtVerify, Locationcontroller.createLocation );

// get location route

/**
 * @swagger
 * /api/location/{id}:
 *   get:
 *     tags:
 *       -  location
 *     summary: Find a location by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the location
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
router.get('/location/:id', jwtVerify, Locationcontroller.getLocation);

// getall location route

/**
 * @swagger
 * /api/location:
 *   get:
 *     tags:
 *       -  location
 *     summary: 'Get all location'
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

router.get('/location', jwtVerify, Locationcontroller.getAllLocation);

// update location route

/**
 * @swagger
 * /api/location/update:
 *   put:
 *     tags:
 *       - location
 *     summary: update location
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *               id:
 *                 type: string
 *               latitute:
 *                 type: string
 *               longitute :
 *                 type: string
 *               isStatus:
 *                 type: boolean
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

router.put('/location/update', jwtVerify, Locationcontroller.updateLocation);

// delete category route

/**
 * @swagger
 * /api/location/delete:
 *   delete:
 *     tags:
 *       -  location
 *     summary: 'Delete location'
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
router.delete('/location/delete', jwtVerify, Locationcontroller.destroyLocation);

module.exports = router
