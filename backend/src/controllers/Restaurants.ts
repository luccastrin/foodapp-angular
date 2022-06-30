import { Request, Response } from 'express';
import { connection, RowDataPacket } from '../database/db';

export class Restaurants {
  getRestaurants(req: Request, res: Response) {
    const sql = 'SELECT * FROM restaurants';
    connection.query<RowDataPacket[]>(sql, (error, rows, fields) => {
      return res.json(rows);
    });
  }

  getRestaurantsById(req: Request, res: Response) {
    const id = +req.params.id;

    const sql = `SELECT * FROM restaurants;`;
    connection.query<RowDataPacket[]>(sql, (error, rows, fields) => {
      const result = rows.find((item: RowDataPacket) => item.id_restaurant === id);
      return res.json(result);
    });
  }

  getMenus(req: Request, res: Response) {
    const id = +req.params.id;

    const sql = `
      SELECT
        restaurants.id_restaurant,
        menu.name,
        menu.image_path,
        menu.description,
        menu.price
      FROM restaurants
      INNER JOIN menu
      ON menu.id_restaurant = restaurants.id_restaurant;
    `;

    connection.query<RowDataPacket[]>(sql, (error, rows, fields) => {
      const result = rows.filter((item: RowDataPacket) => item.id_restaurant === id);
      return res.json(result);
    });
  }

  getReviews(req: Request, res: Response) {
    const id = +req.params.id;

    const sql = `
      SELECT 
        restaurants.id_restaurant,
        reviews.name,
        reviews.comments,
        reviews.date,
        reviews.rating
      FROM restaurants
      INNER JOIN reviews
      ON reviews.id_restaurant = restaurants.id_restaurant;
    `;

    connection.query<RowDataPacket[]>(sql, (error, rows, fields) => {
      const result = rows.filter((item: RowDataPacket) => item.id_restaurant === id);
      return res.json(result);
    });
  }
}

const restaurants = new Restaurants();
export default restaurants;