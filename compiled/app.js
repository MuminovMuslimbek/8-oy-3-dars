"use strict";
// Promises va Promise Metodlari
// N1
function fetchData(error = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve('Ma\'lumot muvaffaqiyatli olindi');
            }
            else {
                reject('Ma\'lumotni olishda xatolik yuz berdi');
            }
        }, 2000);
    });
}
fetchData()
    .then(data => {
    console.log(20, data);
})
    .catch(error => {
    console.log(19, error);
})
    .finally(() => {
    console.log('Promise yakunlandi');
});
// N2
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 1 hal qilindi"), 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 2 hal qilindi"), 3000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Promise 3 hal qilindi"), 2000);
});
Promise.all([promise1, promise2, promise3])
    .then((results) => {
    results.forEach(result => console.log(result));
})
    .catch((error) => {
    console.error("Bir yoki bir necha promise'lar bajarilmadi:", error);
});
// Async/Await
// N1
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Foydalanuvchi ma\'lumotlari yuklandi');
        }, 2000);
    });
}
async function main() {
    try {
        let data = await getUserData();
        console.log(data);
    }
    catch (error) {
        console.error('Xatolik:', error);
    }
}
console.log(main());
// N2
function fetchAPI(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('API muvaffaqiyatli bajarildi');
            }
            else {
                reject('API chaqiruvida xatolik');
            }
        }, 2000);
    });
}
async function callAPI() {
    try {
        let response = await fetchAPI();
        console.log(response);
    }
    catch (error) {
        console.error('Xatolik:', error);
    }
}
console.log(callAPI());
// Typescript da Funksiyalarga Oid Topshiriqlar
// N1
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));
// N2
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Muslimbek"));
// N3
function combine(a, b) {
    return a + b;
}
console.log(combine("Hello", "World"));
console.log(combine(5, 10));
// Generics'ga Oid Topshiriqlar
// N1
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("Hello"));
// N2
function findMin(arr) {
    return arr.reduce((min, current) => {
        return current < min ? current : min;
    });
}
console.log(findMin([5, 3, 8, 1]));
const numberStringPair = {
    key: 1,
    value: "One"
};
const stringBooleanPair = {
    key: "isActive",
    value: true
};
console.log(numberStringPair);
console.log(stringBooleanPair);
