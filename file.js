// Задание 1
const c = prompt('Введите значение константы');
if (c < 10) {
    console.log('Константа меньше 10')
} else {
    console.log('Константа не меньше 10')
}

// Задание 2
let login = 'admin';
let pass = 'qwerty542'
let UserLog = prompt("Введите логин")
let UserPass = prompt("Введите пароль");
if (UserLog != login || UserPass != pass) {
    console.log('Неверный логин или пароль')
} else {
    console.log('Все ОК')
}

//Задание 3
/* if(UserLog == login) {
    if (UserPass == pass) {
        console.log('Все ОК')
    } else {
        console.log('Неверный пароль')
    }
} else {
    console.log('Неверный логин')
} 
*/

// Задание 4
let text = prompt('Введите слово');
if (text == 'lorem') {
    console.log('У вас ошибка в тексте')
} else {
    // let present = `Содержимое переменной: ${text}`;
    console.log(`Содержимое переменной: ${text}`);
}

// Задание 5
let comment = prompt('Введите текст');
if (comment.length > 120) {
    //let print = `Текст слишком длинный. В нем ${comment.length} символов.`;
    console.log(`Текст слишком длинный. В нем ${comment.length} символов.`)
} else {
    console.log(comment)
}

//Задание 6
let cartSum = prompt('Введите сумму');
if (cartSum > 5000) {
    cartSum = cartSum * 0.95;
    // let print1 = `Ваша скидка 5%. Итого: ${cartSum}. Доставка бесплатно.`;
    console.log(`Ваша скидка 5%. Итого: ${cartSum}. Доставка бесплатно.`);
} else {
    let cash = 5000 - cartSum;
    // let print1 = `Итого к оплате: ${cartSum}. До скидки осталось: ${cash}.`;
    console.log(`Итого к оплате: ${cartSum}. До скидки осталось: ${cash}.`);
}