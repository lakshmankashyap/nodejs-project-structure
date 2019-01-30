import * as mongoose from 'mongoose';

import * as bcryptjs from "bcryptjs";
import * as jsonwebtoken from "jsonwebtoken";
import { authConfig } from "../config"

import { Request, Response } from 'express';
import { UserRepository } from '../../../dataAccess';
import { AuthService } from '../../../businessLogic';

export class AuthController {
    constructor() {
    }

    public check(req: Request, res: Response) {
        var authService = new AuthService();
        authService.registrationCheckExistUser(req.body.email).then(data => {
            res.json(data)
        });
    }

    public registration(req: Request, res: Response) {
        var authService = new AuthService();

        authService.registrationCheckExistUser(req.body.email).then(data => {
            if (data.errorMessage) {
                res.json(data);
                return
            }
            var hashedPassword = bcryptjs.hashSync(req.body.password, 8);
            let newUser = new UserRepository(req.body);
            newUser.password = hashedPassword;
            newUser.roleType = 2;
            newUser.status = false;
            authService.registration(newUser).then(resReg => {
                res.json(resReg);
            })

        });
    }

    public login(req: Request, res: Response) {
        var authService = new AuthService();
        authService.login(req.body.email).then(data => {
            if (!data.user) {
                res.json({ errorMessage: "User Not Found" });
                return
            }
            var passwordIsValid = bcryptjs.compareSync(req.body.password, data.user.password);
            if (!passwordIsValid) {
                res.json({ errorMessage: "Invalid email or password" });
                return
            }
            var token = jsonwebtoken.sign({ 
                id: data.user._id, 
                fullName: data.user.firstName, 
                email: data.user.email, 
                role: data.user.roleType 
            }, authConfig.privateKEY, authConfig.signOptions);
            
            res.json({ auth: true, token: token}) 
        });   
    }
}