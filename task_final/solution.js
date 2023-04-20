// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53",
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
    const name = 'Иван';
    const phone = '+7(987)65-43-210';
    const address = {
        street: 'Ленина',
        house: '2',
        entrance: '4',
        floor: '5',
        flat: '53',
    };
    const goods = [
        {
            id: 1,
            title: 'Пицца',
            count: 2,
            price: '500.00'
        }
    ];
    const sum = 900;

    let data = {client: {name, phone},order: {address, sum}, goods: [];};

    let data = JSON.parse(json)
    let products = data.products
    return products;

    
    let countOfGoods = goods.length;
    title = goods[i].title
    goods[i] = goods[i].title

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.order.address = address;
    data.order.sum = sum;

    data.client = client;

    let jsonData = JSON.stringify(data);

    return jsonData;
}
