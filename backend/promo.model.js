const db = require('../config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserModel = require("../models/user.model");


const promoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName,
        
    },
    code: {
        type: String,
        required: true
    },
    
    validity: {
        type: Date,
        required:true
    }
});
const PromoModel = db.model('news', promoSchema); 
module.exports = PromoModel;






















// // In your promo.controller.js or wherever appropriate
// window.flutter_inappwebview.callHandler('getPromoCode').then(function(result) {
//     console.log('Promo Code:', result);
//     // You can use the promo code here as needed
// });


















































// const toDoSchema = new Schema({
//     userId:{
//         type: Schema.Types.ObjectId,
//         ref: UserModel.modelName
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
// },{timestamps:true});

// const ToDoModel = db.model('todo',toDoSchema);
// module.exports = ToDoModel;