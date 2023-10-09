// function Car (license,driver){
//     this.id;
//     this.license=license;
//     this.driver=driver;
//     this.passager;
// }
// Car.prototype.dataPrint= function(){
//     console.log(this.license);
// };


class Car{
id;
license="hola";
driver;
passager;

constructor(license,driver){
    this.license=license;
    this.driver=driver;
}

get print(){
    console.log(this.license);
    console.log(this.driver);
}
}


let data= new Car("DUE221","german");

console.log(Car.license)
