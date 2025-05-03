import express from 'express'
import * as testController from '../controllers/test_controller.js'

const router = express.Router()

router.get('/', testController.Test)

export default router
