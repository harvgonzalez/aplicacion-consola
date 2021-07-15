require('colors');

const { inquirerMenu } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    console.log('Hola mundo');
    let opt = '';
    do{
        opt = await inquirerMenu();
        //opt = await mostrarMenu();
        console.log({opt});
        await pausa
        // if( opt !== '0') await pausa(); esto funciona con mostrarMenu
    } while(opt !== '0')
}

main();