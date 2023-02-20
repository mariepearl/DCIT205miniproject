import express from 'express';

const router = express.Router();

import {createStudent, getAllStudent, getStudent} from "../controllers/StudentsControllers.js";



router.post('/', createStudent);
router.get('/', getAllStudent);
router.get('/:studentid', getStudent);

export default router; 