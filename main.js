'use strict'

//　レストランクラス名クラス

class Restaurant {
    constructor(RestaurantName) {
        this.RestaurantName = RestaurantName;
    }
    get R_Name() {
        return this.RestaurantName;
    }
    static greeting() {
        return 'ようこそCodeVillageへ!!';
    }
}

console.log(Restaurant.greeting()); //挨拶メソッド

const CodeVillage = new Restaurant('Restaurnt-Name :CodeVillage')
console.log(CodeVillage.R_Name); //レストラン名


//　レストランメニュクラス

class RestaurantMenu {
    constructor(MenuName, MenuPrice) {
        this.MenuName = MenuName
        this.MenuPrice = MenuPrice
    }
    R_Menu() {
        console.log(`Menu-list: Menu-Name: ${this.MenuName} Price: ${this.MenuPrice}`)
    }
}

const Piza = new RestaurantMenu('Piza', 1200);
const Salad = new RestaurantMenu('Salad', 600);
const Wine = new RestaurantMenu('Wine', 500);

Piza.R_Menu()
Salad.R_Menu()
Wine.R_Menu() //メニュー追加メソッド



//　レストラン予約クラス

class Reservation {
    constructor(ReservationName, Persons) {
        this.ReservationName = ReservationName
        this.Persons = Persons
    }
    R_Rservation() {
        console.log(`Reservation-Name: ${this.ReservationName}様 Persons: ${this.Persons}名`)
    }
}

const ReservationList = new Reservation('YamadaTaro', '4');
ReservationList.R_Rservation() //予約追加メソッド





//　顧客クラス

class Client {
    constructor(ClientRestaurant) {
        this.ClientRestaurant = ClientRestaurant
    }
    Use_Rest() {
        return this.ClientRestaurant
    }
}

const yamada = new Client('Use_Restaurnt-Name :CodeVillage')
console.log(yamada.Use_Rest());// 顧客の入店したレストラン


// 顧客予約メニュー

class ReservationMenu extends RestaurantMenu {
    constructor(ClientMenu) {
        super();
        this.ClientMenu = ClientMenu
    }
    R_Menu() {
        console.log(`Menu-list: Menu-Name: ${super.MenuName} Price: ${super.MenuPrice}`)
    }
}

Piza.R_Menu(); //注文メソッド 
Wine.R_Menu();




// 顧客精算

class ClientPay extends RestaurantMenu {
    constructor(money) {
        super();
        this.money = money
    }
    Pay_off() {
        console.log("お会計¥" + (Piza.MenuPrice + Wine.MenuPrice))
    }
}

const YamadaTaroPay = new ClientPay(Piza.MenuPrice + Wine.MenuPrice)
YamadaTaroPay.Pay_off();



// レストラン総売上の算出ですがレストランクラスにClientPayを継承して
// メソッドを用いてコンソール上に表示しようと考えたのですがうまく行きませんでした。。
// 下のコードは上のRestaurantクラスにClientPayを継承しようと思って書いたコードです。

// class Restaurant extends ClientPay {
//     constructor(RestaurantName) {
//         super();
//         this.RestaurantName = RestaurantName;
//     }
//     get R_Name() {
//         return this.RestaurantName;
//     }
//     static greeting() {
//         return 'ようこそCodeVillageへ!!';
//     }
//     get Total_Sales() {
//         console.log(super.money)
//     }
// }

// console.log(Restaurant.Total_Sales());