import dotenv from 'dotenv';
import path from 'path';

const environment = process.env.NODE_ENV || 'development';

const envFileName = `${environment}.env`;
dotenv.config({ path: path.resolve(`./config/${envFileName}`) });

console.log(`The app is running in ${environment} mode`);
