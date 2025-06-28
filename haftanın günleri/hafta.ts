let yenisatir = "\r\n";
let cikti = "1-pzt" + yenisatir 
+ "2-salı" + yenisatir 
+ "3-çarş" + yenisatir 
+ "4-perş" + yenisatir 
+ "5-cuma" + yenisatir 
+ "6-ctesi" + yenisatir 
+ "7-ptesi" + yenisatir +"seçim yapınız";

let secim = (prompt(cikti));

switch(secim){
    case "1":
    console.log("Haftanın birinci günü (haftaiçi)");
    break;
    case "2":
    console.log("Haftanın ikinci günü (haftaiçi)");
    break;
    case "3":
    console.log("Haftanın üçüncü günü (haftaiçi)");
    break;
    case "4":
    console.log("Haftanın dördüncü günü (haftaiçi)");
    break;
    case "5":
    console.log("Haftanın beşinci günü (haftaiçi)");
    break;
    case "6":
    console.log("Haftanın altıncı günü (haftasonu)");
    break;
    case "6":
    console.log("Haftanın yedinci günü (haftasonu)");
    break;
    default:
        console.log("lütfen geçerli bir değer giriniz.");
}
