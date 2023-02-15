// Исправьте функцию sendRequest
// Аргументы функции:
let userName;// - имя клиента
let phone; // - телефон клиента
let address = {street, house, entrance, floor, flat} // - объект с адресом доставки: {street, house, entrance, floor, flat}
let countOfGoods = [goods] // - список товаров в заказе
let sum // - стоимость заказа с учетом скидок и доставки
return // Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
let client = 'userName' + 'phone' // - client - строка, имя клиента + телефон клиента;
let order = {address, sum, goods} // - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
let goods = [title, count] // - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    let data = {goods: [], order: {}};

    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;

    data.client = 'Иван';

    let jsonData = JSON.stringify(data);

    return jsonData;
}
