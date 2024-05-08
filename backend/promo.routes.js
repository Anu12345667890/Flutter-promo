const router = require("express").Router();
const PromoController = require('../controller/promo.controller');
router.post("/generateCode", PromoController.createPromoCode);
router.get('/getcode',PromoController.getprc);
module.exports = router;


















































// const router = require("express").Router();
// const ToDoController = require('../controller/todo.controller')

// router.post("/createToDo",ToDoController.createToDo);

// router.get('/getUserTodoList',ToDoController.getToDoList);

// router.post("/deleteTodo",ToDoController.deleteToDo);

// module.exports = router;