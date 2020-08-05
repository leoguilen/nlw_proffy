import app from './app';
import chalk from 'chalk';

const _PORT = 3333;

app.listen(_PORT, () => 
    console.log(chalk.green(
        'Server is running...')));