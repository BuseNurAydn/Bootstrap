
var kullanicilar = [                                     //ARRAY
    {email: "buseaydin57@gmail.com", sifre: "12345"},
    {email: "berataydin29@gmail.com", sifre: "12345"}
]

var tivitler = [
    {email: "buseaydin57@gmail.com", tivit: "Bugün hava çok güzel"},
    {email: "buseaydin57@gmail.com", tivit: "Bugün hava çok güzel 2"},
    {email: "berataydin29@gmail.com", tivit: "Okullar tatil oldu"},
    {email: "berataydin29@gmail.com", tivit: "Okullar tatil oldu 2"}
]

var email = prompt("Emaili giriniz: ");
var sifre = prompt("Şifreyi giriniz: ");

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){

         console.log(tivitler);
    }else{
         console.log("Kullanıcı adı veya şifresi hatalı!");
    }
}
giris(email,sifre);