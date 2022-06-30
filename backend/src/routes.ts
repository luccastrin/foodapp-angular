import { Router } from 'express';
import restaurants from './controllers/Restaurants';

const router = Router();

router.get('/restaurants', restaurants.getRestaurants);
router.get('/restaurants/:id', restaurants.getRestaurantsById);
router.get('/restaurants/:id/menu', restaurants.getMenus);
router.get('/restaurants/:id/reviews', restaurants.getReviews);

export default router;