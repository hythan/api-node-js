import dotenv from 'dotenv';
import path from 'path';

const enviroment = process.env.NODE_ENV || 'development';

const envFileName = `${enviroment}.env`;
dotenv.config({ path: path.resolve(`./config/${envFileName}`) });

console.log(`The app is running in ${enviroment} mode`);