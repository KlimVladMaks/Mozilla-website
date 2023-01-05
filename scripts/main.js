"user strict";

// Получаем доступ к изображению на странице.
let myImage = document.querySelector("img");

// Создаём функцию, активирующуюся при нажатии на изображение.
myImage.onclick = function() {

    // Узнаём src подключенного изображения.
    let mySrc = myImage.getAttribute("src");

    // Меняем изображение и фон на противоположные.
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
        document.body.style.background = "#D8DFF9";
        document.querySelector("html").style.background = "#FDAF69";
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
        document.body.style.background = "#ffe6be";
        document.querySelector("html").style.background = "#9580ff";
    }
};

// Создаём переменную для хранения кнопки смены пользователя.
let myButton = document.querySelector("button");

// Создаём переменную для хранения заголовка сайта.
let myHeading = document.querySelector("h1");

// Если имени пользователя нет в браузере, то запрашиваем его.
// Иначе выводим имя пользователя в заголовок страницы.
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla - это круто, " + storedName;
}

// При нажатии на кнопку смены пользователя, вызываем функцию setUserName()
myButton.onclick = function() {
    setUserName();
}

// Создаём функцию, которая запрашивает имя пользователя, сохраняет его в память браузера и добавляет в заголовок страницы.
function setUserName() {

    // Запрашиваем имя пользователя
    let myName = prompt("Введите ваше имя:");

    // Если имя не введено, то завершаем функцию
    if (myName === null || myName === undefined) return;

    // Если введённое имя некорректно, то выводим сообщение об ошибке и завершаем функцию.
    if (!isGoodUserName(myName)) {
        alert("Некорректный ввод");
        return;
    }

    // Сохраняем имя пользователя в памяти браузера
    localStorage.setItem("name", myName);

    // Добавляем имя пользователя в заголовок
    myHeading.textContent = "Mozilla - это круто, " + myName;
}

// Функция для проверки имени пользователя на корректность
function isGoodUserName(userName) {
    if ((userName.length) > 15 || (userName.length < 1)) return false;
    return true;
}


