// Application routes

import express from 'express'
import { UserRoutes } from '../app/modules/user/user.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

// router.use('/users/', UserRoutes);
// router.use('/academic-semesters/', SemesterRoutes);

export default router