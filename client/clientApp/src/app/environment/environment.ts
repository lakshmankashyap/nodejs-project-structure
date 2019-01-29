import { productionEnvironment } from "./environment.prod";
import { developmentEnvironment } from "./environment.dev";

export interface IEnvironment {
    production: boolean,
    apiUrl: string;
}

export const environment = () => {
    var configuration = "development";
    switch (configuration) {
        case "development":
            return developmentEnvironment;
        case "production":
            return productionEnvironment;
        default:
            return productionEnvironment;
    }
}