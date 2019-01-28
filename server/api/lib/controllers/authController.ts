import * as mongoose from 'mongoose';

import * as bcryptjs from "bcryptjs";
import * as jsonwebtoken from "jsonwebtoken";
import { authConfig } from "../config"

import { Request, Response } from 'express';
import { UserRepository } from '../../../dataAccess';
import { IBookViewModel } from '../../../../shared/viewModels';
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
            console.log(data)
            if (data.errorMessage) {
                res.json(data);
                return
            }
            var hashedPassword = bcryptjs.hashSync(req.body.password, 8);
            let newUser = new UserRepository(req.body);
            newUser.password = hashedPassword;
            authService.registration(newUser).then(resReg => {
                res.json(resReg);
                console.log("******resReg******")
                console.log(resReg)
            })

        });

        //req.body
        // authService.registration({
        //     _id:"sdg",
        //     authorId:"dgdg",
        //     title:"my book"
        // }).then(data => {
        //     if (data.errorMessage) {
        //         return res.status(500).send(data.errorMessage);
        //     }
        //     res.json(data.book);
        // });
    }

    public login(req: Request, res: Response) {
        var authService = new AuthService();
        authService.login(req.body.email).then(data => {
            if (data.errorMessage) {
                res.json(data);
                return
            }
            console.log(data)
            var passwordIsValid = bcryptjs.compareSync(req.body.password, data.user.password);
            if (!passwordIsValid) {
                res.json({ errorMessage: "User Not Found" });
                return
            }
            res.json(data)
        });
        // UserRepository.findOne({ email: req.body.email }, (err, user) => {
        //     if (err) return res.status(500).send('Error on the server.');
        //     if (!user) return res.status(400).send('No user found.');
        //     var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
        //     if (!passwordIsValid) return res.status(200).send({ status: 'error', text: 'User not found', auth: false, token: null });
        //     var token = jsonwebtoken.sign({ id: user._id, fullName: user.fullName, email: user.email }, authConfig.secret, {
        //         expiresIn: 86400 // expires in 24 hours
        //     });
        //     res.status(200).send({ status: 'ok', text: 'Succsess', auth: true, token: token, user: user });
        // });
    }


    // public registration (req: Request, res: Response) {



    //         // // UserRepository.findOne({ email: req.body.email }, (err, user) => {
    //         // //     if(err){
    //         // //         return res.status(500).send("There was a problem check the user.")
    //         // //     }
    //         // //     if(user){
    //         // //         return res.status(200).send({ status: 'error', text: 'User alrady exist' });
    //         // //     }

    //             // let userData: IUserModel = req.body;
    //             // console.log(userData)
    //             var hashedPassword = bcryptjs.hashSync(req.body.password, 8);
    //             // userData.password = hashedPassword

    //             UserRepository.create({
    //                 firstName: req.body.firstName,
    //                 lastName: req.body.lastName,
    //                 email: req.body.email,
    //                 password: hashedPassword,
    //                 confirm: 0,
    //                 role: 1
    //             }, (err, userAdded) => {
    //                 console.log(userAdded)
    //                 res.status(200).send(userAdded)
    //                 if(err){
    //                     return res.status(500).send("There was a problem registering the user.")
    //                 }    
    //                 var token = jsonwebtoken.sign({ id: userAdded._id, fullName: userAdded.fullName, email: userAdded.email }, authConfig.secret, {
    //                     expiresIn: 86400 // expires in 24 hours
    //                 });
    //                 return res.status(200).send({ status: 'ok', text: 'Succsess Registration', auth: true, token: token, user: userAdded });
    //             });

    //         // // })



    //         // newUser.find({ email: req.body.email }, (err, user) => {
    //         //     console.log("*********************************")
    //         //     console.log(user)
    //         //     console.log("*********************************")
    //         // })
    //         //return res.status(200).send("111There was a problem registering the user.")

    //     // // newUser.save((err, user) => {
    //     // //     if(err){
    //     // //         return res.status(500).send("There was a problem registering the user.")
    //     // //     }    
    //     // //     var token = jsonwebtoken.sign({ id: user._id, fullName: user.fullName, email: user.email }, authConfig.secret, {
    //     // //         expiresIn: 86400 // expires in 24 hours
    //     // //     });
    //     // //     res.status(200).send({ auth: true, token: token, user: user });
    //     // // });
    // }


}













// import { RequestModel, RequestPost } from '../middlewares/authMiddleware';
// import { Response } from 'express';
// import * as bcryptjs from "bcryptjs";
// import * as jsonwebtoken from "jsonwebtoken";
// import { authConfig } from "../config"
// import { UserRepository } from '../../../dataAccess';

// export class AuthController {

//     public register(req: RequestPost<{ fullName: string, email: string, password: string }>, res: Response) {
//         var hashedPassword = bcryptjs.hashSync(req.body.password, 8);

//         UserRepository.create({
//             fullName: req.body.fullName,
//             email: req.body.email,
//             password: hashedPassword
//         },
//             (err, user) => {
//                 if (err) return res.status(500).send("There was a problem registering the user.")
//                 // create a token
//                 var token = jsonwebtoken.sign({ id: user._id, fullName: user.fullName, email: user.email }, authConfig.secret, {
//                     expiresIn: 86400 // expires in 24 hours
//                 });
//                 res.status(200).send({ auth: true, token: token, user: user });
//             });
//     }

//     public login(req: RequestPost<{ login: string, password: string }>, res: Response) {
//         UserRepository.findOne({ email: req.body.login }, (err, user) => {
//             if (err) return res.status(500).send('Error on the server.');
//             if (!user) return res.status(400).send('No user found.');
//             var passwordIsValid = bcryptjs.compareSync(req.body.password, user.password);
//             if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//             var token = jsonwebtoken.sign({ id: user._id, fullName: user.fullName, email: user.email }, authConfig.secret, {
//                 expiresIn: 86400 // expires in 24 hours
//             });
//             res.status(200).send({ auth: true, token: token, user: user });
//         });
//     }

//     public profile(req: RequestModel<{}>, res: Response) {
//         res.status(200).send(req.user);
//     }
// }
