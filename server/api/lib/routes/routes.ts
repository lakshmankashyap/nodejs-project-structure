import { Request, Response, NextFunction } from "express";
import { BookController } from "../controllers/bookController";
import { AuthorController } from "../controllers/authorController";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { AuthController } from "../controllers/authController"

export class Routes {

    public bookController: BookController = new BookController()
    public authorController: AuthorController = new AuthorController()
    public authController: AuthController = new AuthController()

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })

        // Auth
        app.route('/auth/profile')
        .post(AuthMiddleware, this.authController.check);
        app.route('/auth/registration')
        .post(this.authController.registration);
        app.route('/auth/login')
        .post(this.authController.login);

        // Book 
        app.route('/book')
            .get(this.bookController.get)
            .post(AuthMiddleware, this.bookController.get)
        app.route('/book/:bookId')
            .get(AuthMiddleware, this.bookController.getById)
            .put(AuthMiddleware, this.bookController.update)
            .delete(AuthMiddleware, this.bookController.delete)

        //Author 
        app.route('/author')
            .get(AuthMiddleware,this.authorController.get)
            .post(AuthMiddleware,this.authorController.add);
        app.route('/author/:authorId')
            .get(AuthMiddleware,this.authorController.getById)
            .put(AuthMiddleware,this.authorController.update)
            .delete(AuthMiddleware,this.authorController.delete)

    }
}