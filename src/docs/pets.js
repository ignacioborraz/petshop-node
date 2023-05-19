/**
 * @api {post} /api/pets  Create a pet
 * @apiName createPets
 * @apiGroup Pets
 *
 * @apiSuccess {Integer} code  Status code.
 * @apiSuccess {String} message  Information of success.
 *
 * @apiSuccessExample Success-Response:
 *     {
 *       "code": "201",
 *       "message": "created"
 *     }
 *
 * @apiError 400  Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "400"
 *       "message": "unexpected error"
 *     }
 */

/**
 * @api {get} /api/pets  List all pets
 * @apiName listPets
 * @apiGroup Pets
 * @apiHeader {String} x-next  A link to the next page of responses.
 * @apiSuccess {Integer} code  Status code.
 * @apiSuccess {Array} pets  A paged array of pets.
 *
 * @apiSuccessExample Success-Response:
 *     "code": "200",
 *     "pets":
 *          [{
 *              "id": "1",
 *              "name": "spock",
 *              "tag": "dog"
 *          },
 *          {
 *              "id": "2",
 *              "name": "leroy",
 *              "tag": "cat"
 *          }]
 *
 * @apiError 404  Null response.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "404"
 *       "message": "not found"
 *     }
 */

/**
 * @api {get} /api/pets/:id  Info for a specific pet
 * @apiName showPetById
 * @apiGroup Pets
 *
 * @apiParam {Number} id  The id of the pet to retrieve.
 *
 * @apiSuccess {Integer} code  Status code.
 * @apiSuccess {Object} pet  Expected response to a valid request.
 *
 * @apiSuccessExample Success-Response:
 *     "code": "200",
 *     "pet":
 *          {
 *              "id": "1",
 *              "name": "spock",
 *              "tag": "dog"
 *          }
 *
 * @apiError 404  Null response.
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "code": "404"
 *       "message": "not found"
 *     }
 */
