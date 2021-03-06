/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const instr = `Инструкции к стиральным машинам
Руководства по пользованию стиральными машинами
Этот раздел нашего веб-ресурса разработан для владельцев брендовых стиральных машин, а также тех потребителей, которые в скором времени планируют ими обзавестись. Тут собраны электронные инструкции по эксплуатации продукции таких торговых марок:

LG;
Electrolux;
Zanussi;
Whirlpool;
Samsung и т.п.
Давно и тщетно пытаетесь отыскать руководство на русском именно к своей модели стиралки? Тогды вы пришли по адресу!

Почему важно ознакомиться с основными тезисами пользовательского руководства до начала эксплуатации стиральной машины?
Чем полезны инструкции пользователя для машинерии турбомашин:

в них можно отыскать информацию, которой нет в открытом доступе на просторах сети Интернет;
с их помощью легко научиться распознавать сильные и слабые стороны приобретения;
они обучают правильному обращению со стиральными машинами;
содержат советы, рекомендации и правила относительно безопасного использования техники.
Структура мануалов к стиральным машинам
Инструкции по пользованию, как правило, включают такие параграфы:

описание стиральной машины;
рекомендации по технике безопасности;
комплектация, сборка, установка;
особенности функционирования;
технические свойства;
неисправности и способы их устранения.`;

//Объектно
let regForbI = new RegExp('ы');

//Литерально
let regJ = /ж/;
let regMachine = /машин/;
let regNum = /\d/;

//Метод Регулярных выражений -- test
console.log(regForbI.test('Академия ШАГ'));
console.log(regJ.test('Иерархия академиков содержит букву ы'));
console.log('Проверка на машину: ', regMachine.test(instr));
console.log('Проверка на цифру: ', regNum.test(instr));

//Наборы символов
let str = 'Happy New 2020 Year!!!';
let regNum2 = /[0123456789]/;
let regNum3 = /[0-9]/;
let regNum4 = /\d/;
console.log(`Check string: ${str} on numbers: ${regNum2.test(str)}`);
let reg3and5 = new RegExp('[345]');
console.log(`Check string: ${str} on numbers 345: ${reg3and5.test(str)}`);
let strMach = 'Уезжают машины';
let regMachine2 = /машин[ыау]/;
console.log(`Check string: ${strMach} on машин[ыа]: ${regMachine2.test(strMach)}`);


let data = '16841658465125102035103210531031894030121330570354008518108+6109454103103103ы541013201321408510313510354103581035013851038510351021032103413949848040715233223657909643110103354..030408..350.084.054.011515318748945611806151050452103041801305013321068080160353021108843132021010561015418541305035651066510660132056505655015150151603003323215604654640654065405640650506405640654';
let reg2000 = /20[012][\d]/;
console.log(`Check string: ${data} on дата: ${reg2000.test(data)}`);

let reg5sym = /[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]/;
let reg5sym2 = /\w\w\w\w\w/;
console.log(`Check string: ${str} on дата: ${reg5sym.test(str)}`);
console.log(`Check string: ${str} on дата: ${reg5sym2.test(str)}`);

//Отрицание в наборах
let regYo = /[^ё]/; //любой символ, кроме ё
let regNotNum = /[^\d\.\,\+]/;

console.log(`Check string: ${data} on не числа: ${regNotNum.test(data)}`);


//Сокращения
/**
 * \d - цифра 0 - 9 - digit
 * \w - цифросимвольный элемент - word
 * \s - пробельный символ - space
 */

 /**Отрицательные сокращения
  * \D - не цифра
  * \W - не цифросимвольный элемент
  * \S - не пробельный символ
  */

 //Повторение. Квантификаторы
 // +*? {2,3} {2,} {,2} {2}

 //replace 
 console.clear();
 let regJi = /[дг]/g;
 let regUpToLo = new RegExp('[А-Я]', 'g');
 let town = 'ПодгороДНОе';
 console.log(town.replace(/о/, 'а'));
 console.log(town.replace(regJi, 'жы'));
 console.log(town.replace(regUpToLo, 'х'));

 //Flags
 //    global match -- g

 //Искать и выбирать данные - exec  -- execute (RegExp method)
let regMachine3 = /машин[ыау]?[м]?[и]?/g;
let regMachine4 = /машин[а-я]*/g;
console.log('exec: ', regMachine3.exec(instr));
// match - совпадения - String method
console.log('match: ', instr.match(regMachine4));


//Группировка
let regNames = /([A-Z]\w+)\s([A-Z]\w+)/;
let fi = 'Current mentor is: Nick Sotula';
console.log(fi.replace(regNames, '$2 $1'));