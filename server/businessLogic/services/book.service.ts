import { IBookService } from "./interfaces/book.service";
import { BookRepository } from "../../dataAccess";
import { OrderRepository } from "../../dataAccess";
import { IBookViewModel } from "../../../shared/viewModels";
import { ConvertTypeHelper } from "../helpers";

export class BookService implements IBookService {
    //     public async get1(): Promise<{ errorMessage: string, book: IBookViewModel }> {
    //         let a: ConvertTypeHelper = new ConvertTypeHelper();
    //         // console.log(a.toObjectId('5c529fd1af3d8239448a62b5'))
    //         // console.log("* * ")
    //         console.log("*************************")
    //         // var result = await OrderRepository.aggregate([
    //         //     { $lookup:
    //         //        {
    //         //          from: 'products',
    //         //          localField: 'product_id',
    //         //          foreignField: '_id',
    //         //          as: 'orderdetails'
    //         //        }
    //         //      }
    //         //     ])
    // const aa = "Pemons";

    //         let query = new RegExp('.*'+ aa +'.*','i');
    //         var result = await OrderRepository.aggregate([
    //             // {
    //             //     $match: {

    //             //         name: { $regex: "/^L/" }

    //             //     }
    //             // },
    //             // { $match: { "name": { $search: "L" } } },
    //             { $match: {$or : [{"products.name": query}, {name : query}]} },
    //             {
    //                 $lookup:
    //                 {
    //                     from: 'products',
    //                     localField: 'product_id',
    //                     foreignField: '_id',
    //                     as: 'orderdetails'
    //                 }
    //             }

    //         ])

    //         console.log(result)
    //         result.forEach(data => {
    //             console.log(data.orderdetails)
    //         })
    //         return null;
    //         // let newBook = new BookRepository(book);
    //         // try {
    //         //     var result = await newBook.save();

    //         //     if (result.errors) {
    //         //         return {
    //         //             book: null,
    //         //             errorMessage: 'Error on the server.'
    //         //         };
    //         //     }
    //         //     return {
    //         //         book: book,
    //         //         errorMessage: result.errors
    //         //     };
    //         // } catch (error) {
    //         //     //logging
    //         //     return {
    //         //         book: null,
    //         //         errorMessage:  error._message || 'Sorry something went wrong.'
    //         //     };
    //         // }
    //     }
    public async get(): Promise<{ errorMessage: string, book: IBookViewModel }> {
        try {
            var result = await BookRepository.find();
            console.log("iog")
console.log(result)
return null
            // if (result.errors) {
            //     return {
            //         book: null,
            //         errorMessage: 'Error on the server.'
            //     };
            // }
            // return {
            //     book: book,
            //     errorMessage: result.errors
            // };
        } catch (error) {
            //logging
            return {
                book: null,
                errorMessage: error._message || 'Sorry something went wrong.'
            };
        }
    }

    public async add(book: IBookViewModel): Promise<{ errorMessage: string, book: IBookViewModel }> {
        let newBook = new BookRepository(book);
        try {
            var result = await newBook.save();

            if (result.errors) {
                return {
                    book: null,
                    errorMessage: 'Error on the server.'
                };
            }
            return {
                book: book,
                errorMessage: result.errors
            };
        } catch (error) {
            //logging
            return {
                book: null,
                errorMessage: error._message || 'Sorry something went wrong.'
            };
        }
    }
}