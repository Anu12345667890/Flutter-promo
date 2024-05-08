const PromoModel = require('../models/promo.model');

class PromoService {
    static async createPromoCode(userId, code, validity) {
        const promo = new PromoModel({ userId, code, validity });
        return await promo.save();
    }

    static async getp(userId) {
        const pr = await PromoModel.find({ userId });
        return pr;
    }

    static async validatePromoCode(prCode) {
        const pr = await PromoModel.findOne({ code: prCode });
        if (!pr) {
            return { valid: false, message: "Invalid promo code" };
        }
        if (pr.validity < new Date()) { // Check if validity time has passed
            return { valid: false, message: "Expired promo code" };
        }
        return { valid: true, message: "Valid promo code" };
    }
}

module.exports = PromoService;








































// const { deleteToDo } = require("../controller/todo.controller");
// const ToDoModel = require("../models/todo.model");

// class ToDoService{
//     static async createToDo(userId,title,description){
//             const createToDo = new ToDoModel({userId,title,description});
//             return await createToDo.save();
//     }

//     static async getUserToDoList(userId){
//         const todoList = await ToDoModel.find({userId})
//         return todoList;
//     }

//     static async deleteToDo(id){
//         const deleted = await ToDoModel.findByIdAndDelete({_id:id})
//         return deleted;
//     }
// }

// module.exports = ToDoService;