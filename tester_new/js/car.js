function Car (license,driver){
    this.id;
    this.license=license;
    this.driver=driver;
    this.passager;
}
Car.prototype.dataPrint= function(){
    console.log(this.license);
};
