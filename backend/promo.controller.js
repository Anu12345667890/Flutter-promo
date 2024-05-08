const PromoService = require('../services/promo.services');

exports.createPromoCode = async (req, res, next) => {
    try {
        const { userId, code } = req.body;
        const validity = new Date(); 
        validity.setSeconds(validity.getSeconds() + 30);
        const promo = await PromoService.createPromoCode(userId, code, validity); 

        res.json({ status: true, success: promo });
    } catch (error) {
        console.error('Error generating promo code:', error);
        next(error);
    }
};

exports.getprc = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const promo = await PromoService.getp(userId); 

        res.json({ status: true, success: promo });
    } catch (error) {
        console.error('Error fetching promo codes:', error);
        next(error);
    }
};




































// function generateRandomPromoCode() {
//     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     let code = '';
//     for (let i = 0; i < 8; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         code += chars[randomIndex];
//     }
//     return code;
// }
