// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım.

let adet = prompt('Alışveriş listeniz için kaç adet ürün eklemek istersiniz?');
let urunList = [];

for(let i = 0; i < adet; i++) {
  let urun = prompt('Lütfen bir ürün ismi gir ->');
  urunList.push(urun);
  console.log('Eklenen Ürünler ->');
  console.table(urunList);
  console.log("Toplam ürün sayısı --> " + urunList.length);
}


// if else ler ile bir kaç özellik daha eklemeye çalıştım ancak bozuldu. özellikle soracağım.

