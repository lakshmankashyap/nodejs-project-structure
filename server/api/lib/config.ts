import * as fs from 'fs';

const paramConfig = {
    issuer: "Igor Rosliakov",
    subject: 'igor@sozdayka.com',
    audience: 'http://sozdayka.com',
}

export const authConfig = {
    secret: 'igorsuperpuperdev',

    privateKEY: fs.readFileSync('./api/config/private.key'),
    publicKEY: fs.readFileSync('./api/config/public.key'),
    signOptions: {
        issuer: paramConfig.issuer,
        subject: paramConfig.subject,
        audience: paramConfig.audience,
        expiresIn: "24h",
        algorithm: "RS256"
    },
    verifyOptions: {
        issuer: paramConfig.issuer,
        subject: paramConfig.subject,
        audience: paramConfig.audience,
        expiresIn: "12h",
        algorithm: ["RS256"]
    }
};