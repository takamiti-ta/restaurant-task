'use strict'

// --------------------------
// お疲れ様でした!以下全体として気になったところです。

// ■クラスは2つにする。
//  => 課題の指示文にはクラスは2つと書いているので、それに従いましょう。
// 総売上の部分も、顧客がどこまで購入したかをインスタンスに保存できていないので、うまくいっていないです。

// ■オブジェクトの使い方をマスターする。 
// => 今回メニューや予約リストで指定されているのは、「オブジェクトの配列」です。
// つまり、[{オブジェクト}, {オブジェクト}...]の形になるというところです。
// オブジェクトの使い方や概念について調べながら、オブジェクトを使ってやってみてください。
// 質問が出てきたら、気軽に聞いてくださいね。

// ■コンストラクタではなく、プロパティの指定の仕方もある。=> 
// クラスの中には、2種類のものしか入りません。コンストラクタとメソッドです。以下のようになります。

// class Example {
//     constructor(クラスの引数) {
//         初期化処理
//     }
    // メソッド名(引数) {処理}
// }

// そして、コンストラクタの中には、プロパティを書きますが、プロパティは必ずしも引数を使わないといけないということではないです。
// 以下、引数を使わないクラスの例を示します。

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.hello = "Hello, "
//     }
//     greeting () {
//         return console.log(this.hello + this.firstName + this.lastName)   
//     }
// }
// const steve = new User("Steve", "Beppu")
// steve.greeting()

// 上記で、helloはコンストラクタ内で定義されているプロパティです。引数を使わずに定義しています。
// これを使うと、他のクラスを増やさずに、レストランクラスの中に様々なプロパティを格納することができます。応用してみてください。

// --------------------------






//　レストランクラス名クラス

class Restaurant {//-----------------ここにメニュー等も追加してみてください。
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

const CodeVillage = new Restaurant('Restaurnt-Name :CodeVillage') //--------------これはオブジェクトではなく、文字列になってしまっています。
console.log(CodeVillage.R_Name); //レストラン名


//　レストランメニュクラス

class RestaurantMenu { //----------------メニューは、レストランの中にあるので、レストランクラスに統合してみてください。
    constructor(MenuName, MenuPrice) { 
        this.MenuName = MenuName
        this.MenuPrice = MenuPrice
    }
    R_Menu() {
        console.log(`Menu-list: Menu-Name: ${this.MenuName} Price: ${this.MenuPrice}`)
    }
}

//----------------------------
// 以下の部分は、メニューの中身はインスタンスとして存在しますが、メニュー自体が存在していないです。
// ピザ単品とサラダ単品とワイン単品のカードがあるだけで、メニューがないイメージになってしまっています。
// オブジェクトのリストを使いましょう。
//----------------------------

const Piza = new RestaurantMenu('Piza', 1200);
const Salad = new RestaurantMenu('Salad', 600);
const Wine = new RestaurantMenu('Wine', 500);

Piza.R_Menu() 
Salad.R_Menu()
Wine.R_Menu() //メニュー追加メソッド



//　レストラン予約クラス

class Reservation {　// ---------------こちらもレストランクラスに統合してください。
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

//---------------------------------
// 上記のyamadaTaroPayでは、レストラン側が山田さんが何を頼んだか手で入力している状況です。
// 実際はレストラン側は伝票にすべて書き込んでおいて、最後に打ち込むだけですよね。
// 現在伝票がない状態になってしまっています。
// この伝票の機能を顧客クラスに追加してやってみてください。
//---------------------------------

YamadaTaroPay.Pay_off();



// レストラン総売上の算出ですがレストランクラスにClientPayを継承して
// メソッドを用いてコンソール上に表示しようと考えたのですがうまく行きませんでした。。
// 下のコードは上のRestaurantクラスにClientPayを継承しようと思って書いたコードです。

// ------------------------------------
// 上記の内容を改善すれば、ここも方法が見えてくると思います。
// ------------------------------------

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