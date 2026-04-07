// // // // // // console.log('\n==Деструктуризация массивов==')
// // // // // // const colors = ['red', 'green', 'blue']
// // // // // // const [first, second, third] = colors
// // // // // // console.log(first, second, third)
// // // // // // const [c1, c2, c3, c4 = 'yellow'] = colors
// // // // // // console.log(c1, c2, c3, c4)
// // // // // // console.log('\n==Деструктуризация объектов==')
// // // // // // const user = {
// // // // // // 	name: 'Алиса',
// // // // // // 	age: 30,
// // // // // // 	city: 'Москва',
// // // // // // }

// // // // // // const { name, age, city } = user
// // // // // // console.log(name, age, city)

// // // // // // const { name: userName, age: userAge, country = 'Россия' } = user
// // // // // // console.log(userName, country)

// // // // // // console.log('\n==Деструктуризация в параметрах==')

// // // // // // function printUser({ name, age, city }) {
// // // // // // 	console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}`)
// // // // // // }

// // // // // // console.log()
// // // // // // printUser(user)

// // // // // // const product = {
// // // // // // 	name: 'Телефон',
// // // // // // 	price: 500,
// // // // // // 	category: 'Электроника',
// // // // // // 	inStock: true,
// // // // // // }
// // // // // // const { name: productName, price, category, inStock } = product
// // // // // // console.log(
// // // // // // 	`Название: ${productName}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
// // // // // // )

// // // // // // function printProduct({ name, price, category, inStock }) {
// // // // // // 	console.log(
// // // // // // 		`Название: ${name}, Цена: ${price}, Категория: ${category}, В наличии: ${inStock}`,
// // // // // // 	)
// // // // // // }

// // // // // // printProduct(product)

// // // // // // console.log('\nSpread для массивов')
// // // // // // const arr1 = [1, 2, 3]
// // // // // // const arr2 = [4, 5, 6]
// // // // // // const combined = [...arr1, ...arr2]
// // // // // // console.log(`Combined: ${combined}`)
// // // // // // const copy = [...arr1]
// // // // // // console.log(`Copy: ${copy}`)
// // // // // // const extended = [0, ...arr1, 7, 8]
// // // // // // console.log(`Extended: ${extended}`)

// // // // // // console.log('\nSpread для объектов')

// // // // // // const person = {
// // // // // // 	name: 'Иван',
// // // // // // 	age: 25,
// // // // // // }
// // // // // // const adress = {
// // // // // // 	city: 'Санкт-Петербург',
// // // // // // 	street: 'Невский проспект',
// // // // // // }
// // // // // // const fullinfo = { ...person, ...adress }
// // // // // // console.log(`Full Info:`, fullinfo)
// // // // // // const personCopy = { ...person }
// // // // // // console.log('Person Copy:', personCopy)
// // // // // // const updatedPerson = { ...person, age: 26, ocupation: 'Разработчик' }
// // // // // // console.log('Updated Person:', updatedPerson)

// // // // // console.log('Rest оператор для массивов')
// // // // // function sum(...numbers) {
// // // // // 	return numbers.reduce((total, num) => total + num, 0)
// // // // // }
// // // // // console.log(`Sum 1,2,3,4: ${sum(1, 2, 3, 4)}`)
// // // // // console.log(`Sum 5,10,15: ${sum(5, 10, 15)}`)

// // // // // const numbers = [1, 2, 3, 4]
// // // // // const [first, second, ...rest] = numbers
// // // // // console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`)

// // // // arr1 = [1, 2, 3]
// // // // arr2 = [4, 5, 6]
// // // // const combined = [...arr1, ...arr2]
// // // // console.log(`Combined: ${combined}`)

// // // // function findmax(...numbers) {
// // // // 	return Math.max(...numbers)
// // // // }
// // // // console.log(`Max of 1,2,3,4: ${findmax(1, 2, 3, 4)}`)
// // // // console.log(`Max of 5,10,15: ${findmax(5, 20, 15)}`)

// // // // const person = {
// // // // 	name: 'Иван',
// // // // 	age: 25,
// // // // }
// // // // const adress = {
// // // // 	city: 'Санкт-Петербург',
// // // // 	street: 'Невский проспект',
// // // // }
// // // // const fullinfo = { ...person, ...adress }
// // // // console.log(`Full Info:`, fullinfo)
// // // import { greet, add, PI } from './utils.js'

// // // console.log(greet('Мир'))
// // // console.log(`Сумма 5 и 10: ${add(5, 10)}`)
// // // console.log(`Значение PI: ${PI}`)

// // // import { multiply as умножить } from './utils.js'
// // // console.log(`Произведение 5 и 10: ${умножить(5, 10)}`)

// // // import * as Utils from './utils.js'
// // // console.log(Utils.greet('Мир'))
// // // console.log('Умножение 5 и 10:', Utils.multiply(5, 10))

// // // import * as math from './math.js'
// // // console.log(`Квадрат 3: ${math.square(3)}`)
// // // console.log(`Куб 2: ${math.cube(2)}`)
// // // console.log(`Значение E: ${math.E}`)
// // console.log('Промисы')
// // const simplePromise = new Promise((resolve, reject) => {
// // 	const success = true
// // 	if (success) {
// // 		resolve('Промис выполнен успешно!')
// // 	} else {
// // 		reject('Промис завершился с ошибкой.')
// // 	}
// // })

// // simplePromise
// // 	.then(message => console.log('Успех:', message))
// // 	.catch(error => console.error('Ошибка:', error))

// // function delay(ms) {
// // 	return new Promise(resolve => {
// // 		setTimeout(() => {
// // 			resolve(`Задержка в ${ms} миллисекунд завершена.`)
// // 		}, ms)
// // 	})
// // }

// // delay(2000)
// // 	.then(message => console.log(message))
// // 	.catch(error => console.error('Ошибка:', error))

// // function fetchUserData(userId) {
// // 	return new Promise((resolve, reject) => {
// // 		setTimeout(() => {
// // 			if (userId > 0) {
// // 				resolve({ id: userId, name: 'Алиса', email: 'alice@example.com' })
// // 			} else {
// // 				reject('Неверный user ID.')
// // 			}
// // 		}, 1500)
// // 	})
// // }

// // fetchUserData(1)
// // 	.then(user => console.log('Данные пользователя:', user))
// // 	.catch(error => console.error('Ошибка:', error))

// // function step1() {
// // 	return new Promise(resolve => {
// // 		setTimeout(() => resolve('Шаг 1 завершён'), 500)
// // 	})
// // }

// // function step2(previousResult) {
// // 	return new Promise(resolve => {
// // 		setTimeout(() => resolve(`${previousResult}, Шаг 2 завершён`), 500)
// // 	})
// // }

// // function step3(previousResult) {
// // 	return new Promise(resolve => {
// // 		setTimeout(() => resolve(`${previousResult}, Шаг 3 завершён`), 500)
// // 	})
// // }
// // step1()
// // 	.then(result => step2(result))
// // 	.then(result => step3(result))
// // 	.then(finalResult => console.log('Результат всех шагов:', finalResult))
// // 	.catch(error => console.error('Ошибка в процессе выполнения:', error))

// const product = {
// 	name: 'Телефон',
// 	price: 500,
// 	category: 'Электроника',
// 	inStock: true,
// }

// function checkInventory(inStock) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (inStock === true) {
// 				resolve(`${product.name} - в наличии!`)
// 			} else {
// 				reject('Товар закончился на складе.')
// 			}
// 		}, 1500)
// 	})
// }

// checkInventory(product.inStock)
// 	.then(message => console.log('Успех:', message))
// 	.catch(error => console.error('Ошибка:', error))

// console.log('Асинхронные функции и await')
// async function greet() {
// 	return 'Привет, мир!'
// }

// greet().then(message => console.log(message))

// function getWeather() {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve({ temp: 22, condition: 'Солнечно' })
// 		}, 1000)
// 	})
// }

// async function showWeather() {
// 	console.log('Получаем погоду...')
// 	const weather = await getWeather()
// 	console.log(`Погода: ${weather.temp}°C, ${weather.condition}`)
// }
// showWeather()

// async function fetchData(shouleFail) {
// 	return new Promise((reslove, reject) => {
// 		setTimeout(() => {
// 			if (shouleFail) {
// 				reject('Ошибка при загрузке данных')
// 			} else {
// 				reslove({ data: 'Важные данные' })
// 			}
// 		}, 800)
// 	})
// }

// async function getData() {
// 	try {
// 		const resuit = await fetchData(false)
// 		console.log('Успешно', resuit.data)

// 		const failedResuit = await fetchData(true)
// 		console.log('это не выполняетмя')
// 	} catch (error) {
// 		console.log('Поймана ошибка', error)
// 	}
// }
// getData()

// async function cookDinner() {
// 	console.log('Начинаем готовить...')

// 	const pasta = await delay(1000).then(() => 'Паста готова')
// 	console.log(pasta)

// 	const sauce = await delay(500).then(() => 'Соус готов')
// 	console.log(sauce)

// 	const salad = await delay(700).then(() => 'Салат готов')
// 	console.log(salad)

// 	return 'Ужин готов'
// }

// function delay(ms) {
// 	return new Promise(reslove => {
// 		setTimeout(() => {
// 			reslove(`Прошло ${ms} миллисекунд`)
// 		}, ms)
// 	})
// }

// cookDinner().then(resuit => console.log(resuit))

// async function cookDinnerFast() {
// 	console.log('Готовим все одновременно...')

// 	const [pasta, sauce, salad] = await Promise.all([
// 		delay(1000).then(() => 'Паста готова'),
// 		delay(500).then(() => 'Соус готов'),
// 		delay(700).then(() => 'Салат готов'),
// 	])

// 	console.log(pasta, sauce, salad)
// 	return 'Ужин готов быстрее'
// }
// cookDinnerFast().then(resuit => console.log(resuit))

// function checkInventory(product) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const i = {
// 				ноутбук: true,
// 				телефон: true,
// 				планшет: false,
// 			}
// 			if (i[product] === true) {
// 				resolve(`Товар "${product}" есть в наличии!`)
// 			} else if (i[product] === false) {
// 				reject(`Товара "${product}" нет в наличии!`)
// 			} else {
// 				reject(`Товар "${product}" не найден в системе!`)
// 			}
// 		}, 1000)
// 	})
// }

// function calculateCost(product) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const prices = {
// 				ноутбук: 50000,
// 				телефон: 30000,
// 				планшет: 20000,
// 			}
// 			if (prices[product]) {
// 				resolve({
// 					message: `Стоимость товара "${product}"`,
// 					price: prices[product],
// 				})
// 			} else {
// 				reject(`Товар "${product}" не найден в системе!`)
// 			}
// 		}, 200)
// 	})
// }

// async function processOrder(product) {
// 	try {
// 		console.log(`\n=== Обработка заказа: ${product} ===`)

// 		console.log('Подготовка к обработке заказа...')
// 		const delayMess = await delay(500)
// 		console.log(`${delayMess}`)

// 		console.log('1. Проверяем наличие товара...')
// 		const inventoryResult = await checkInventory(product)
// 		console.log(` ${inventoryResult}`)

// 		await delay(300)
// 		console.log('   Продолжаем оформление...')

// 		console.log('2. Рассчитываем стоимость...')
// 		const costResult = await calculateCost(product)
// 		console.log(`${costResult.message} (Всего: ${costResult.price} руб.)`)

// 		await delay(900)
// 		console.log('3. Подтверждаем заказ...')
// 		await delay(400)
// 		console.log('   Заказ подтверждён!')

// 		console.log(`=== Заказ "${product}" успешно обработан! ===`)
// 	} catch (error) {
// 		console.error(`Ошибка: ${error}`)
// 		throw error
// 	}
// }

// processOrder('ноутбук')

// console.log("Fetch Api");
// async function getUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok){
//             throw new Error(`HTTP ошибка статус${response.status}` );
//         }
//         const users = await response.json();

//         console.log("первые три пользователя");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     }catch(error){
//         console.log("Ошибка при загрузке ", error.message);
//     }
// }

// getUsers();

// async function getUserById(id) {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();

//         console.log(`Пользователь #${id}`);
//         console.log(`Имя ${user.name}`);
//         console.log(`Город ${user.address.city}`);
//         console.log(`Компании ${user.company.name}`);

//     }catch(error){
//         console.log("Ошибка", error.message);
//     }

// }

// getUserById(1);

// async function createPost() {
// 	try {
// 		const newPost = {
// 			title: 'Моя первая запись',
// 			body: 'Это содержание моей первой записи в блоге',
// 			userId: 1,
// 		}
// 		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(newPost),
// 		})

// 		const createdPost = await response.json()
// 		console.log('Создана новая запись:')
// 		console.log(`ID: ${createdPost.id}`)
// 		console.log(createdPost.title)
// 	} catch (error) {
// 		console.log('Ошибка при создании записи:', error.message)
// 	}
// }
// createPost()

// console.log("Optional Chaning");

// const user1 = {
//     name: "Андрей",
//     address : {
//         city: "Волжский",
//         street : "Пушкина",
//     },
// };

// const user2 = {
//     name: "Дмитрий",
// };

// const city1 = user2.address?.city;
// console.log("Город ", city2);

// const street = user1.address?.street;
// console.log("Улица", street);

// const admin = {
//     name : "Администратор",
//     permissions : {
//         canDelete: () => true,
//     },
// };

// const guest = {
//     name : "Гость",
// };

// console.log("Админ может удалять?", admin.permissions?.canDelete?.());

// const company = {
//     name : "Tech corp",
//     employees : [
//         {name : "Надежда", role : "Developer"},
//         {name : "Анна", role : "Designer"},
//     ],
// };

// const startup = {
//     name : "New Startup",
// };

// console.log("Первый сотрудников", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа", startup.employees?.[[0]?.name]);

// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log(`value1 || "defauit" `,value1 || "default" );

// console.log(`value1 ?? "default"`,value1 ?? "default");
// console.log(`value1 ?? "default"`,value2 ?? "default");

// function displayUserSettings(settings){
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;

//     console.log("настройки пользователя");
//     console.log("Тема" , theme);
//     console.log("Размер шрифта", fontSize);
//     console.log("Уведомленияя" , notifications);
// }

// displayUserSettings({theme: "dark", fontSize: 16});
// displayUserSettings({});

// const apiResponse = {
// 	data: {
// 		user: {
// 			profile: {
// 				settings: {
// 					language: 'ru',
// 				},
// 			},
// 		},
// 	},
// }

// const language = apiResponse.data.user.profile.settings.language ?? 'en'
// console.log('Язык:', language)

// const emptyResponse = {}
// const defaultLanguage =
// 	emptyResponse?.data?.user?.profile?.settings?.language ?? 'en'
// console.log('Язык по умолчанию:', defaultLanguage)

// const order = {
// 	id: 228,
// 	customer: {
// 		name: 'Daria Pikmi',
// 	},
// 	shipping: {
// 		street: 'ул.Пушкина, д.10',
// 		city: 'Ростов-на-Дону',
// 		deliveryType: 'Самовывоз',
// 	},
// 	payment: {
// 		paymentMethod: 'Наличными',
// 		paymentStatus: 'Ожидает оплаты',
// 		currency: 'RUB',
// 	},
// }

// function displayOrder(order) {
// 	const name = order.customer?.name ?? 'No Data'
// 	const email = order.customer?.email ?? 'No Data'
// 	const street = order.shipping?.street ?? 'No Data'
// 	const city = order.shipping?.city ?? 'No Data'
// 	const type = order.shipping?.deliveryType ?? 'No Data'
// 	const index = order.shipping?.postalCode ?? 'No Data'
// 	const payment = order.payment?.paymentMethod ?? 'No Data'
// 	const status = order.payment?.paymentStatus ?? 'No Data'
// 	const currency = order.payment?.currency ?? 'RUB'
// 	console.log(
// 		`-- Информация о заказе --
//     Клиент: ${name}
//     Контакт: ${email}
//     -- Доставка --
//     Адрес: ${street}
//     Город: ${city}
//     Тип: ${type}
//     Индекс: ${index}
//     -- Оплата --
//     Метод: ${payment}
//     Статус: ${status}
//     Валюта: ${currency}`,
// 	)
// }
// displayOrder(order)
