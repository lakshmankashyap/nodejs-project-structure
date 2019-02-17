export interface IBookViewModel {
    _id:any;
    title: String,
    description: String,
    img: String,
    text: String,
    status: Boolean,
    authors: [any]
}

/*
class Test123 {
    private _id: String = "";
    constructor () {

    }

    get id():String {
        return this._id + "Hello";
    }

    set id(value) {
        this.id = value;
    }
}

export interface IBookViewModel extends Test123 {
    id: String;
    title: String,
    description: String,
    img: String,
    text: String,
    status: Boolean,
    authors: [String]
}

let a:IBookViewModel = {
    id: 'AAAAaaaAAA',
    authors: null,
    description: "",
    img: "",
    text: "",
    status: false,
    title:""
}

console.log(a)

this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  }
  */