const {Router} = require('express');
const {getMeal, saveMeals, deleteMeals, editMeal} = require('./MealController')
const router = Router();

router.get('/', getMeal) 
router.post('/saveMeals', saveMeals)
router.post('/deleteMeal', deleteMeals)
router.post('/editMeal', editMeal)

module.exports = router;