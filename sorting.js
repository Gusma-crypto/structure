import chalk from "chalk";
import readline from 'readline';


const rl = readline.createInterface({input: process.stdin, output:process.stdout });



let arr = [7,3,9,1,5];

function Ascending(){
    const asc = arr.sort();
    console.log(chalk.magenta(asc));
    tanyaUlang();
}
function Descending(){
    const des = arr.sort((a,b)=>b-a);
    console.log(chalk.magenta(des));
    tanyaUlang();
}

function tanyaUlang(){
    rl.question('apakah mau sorting lagi? :', (jawaban)=>{
        if(jawaban.toLowerCase() === 'y'){
            console.log('jawaban benar');
            main();
        }
        else if(jawaban.toLowerCase() ==='t'){
            console.log(chalk.yellow('program selesai!!!!'));
            process.exit(1);
        }
        else{
            console.log(chalk.red('jawaban salah!!!!'));
        }
        
    });
}


function main(){
    console.clear();
    console.log(chalk.green('========SHORTING ASC/DESC======='));
    console.log(chalk.yellow('1. Shorting Ascending'));
    console.log(chalk.yellow('2. Shorting Descending'));
    console.log(chalk.yellow('3. keluar'));

    rl.question('pilih shorting (1-3): ', (pilihan)=>{
        switch(pilihan){
            case '1':
                Ascending();        
                break;
            case '2':
                Descending();
                
                break;
            case '3':
                console.log(chalk.yellow('sampai jumpa kembali!!! :'));
                process.exit(0)
            default:
                console.log(chalk.yellow('pilihan salah!! silahkan pilih kembali! 0-3'));
        }    

        
       
    });
    
}

main();