import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // lista usuarios
// router.get('/:id', userController.show); // mostrar um usuario

router.post('/', userController.store); // criação de usuario
router.put('/', loginRequired, userController.update); // atualização de usuario
router.delete('/', loginRequired, userController.delete); // deletar um usuario7

export default router;
