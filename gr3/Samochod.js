class Samochod{
    constructor(marka,model,cena,rocznik,spalanie){
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;
    }

    wiek(){
        const rok = new Date().getFullYear();
        return rok - this.rocznik;
    }

    koszt(){
        const cena = 6.50;
        return this.spalanie*cena;
    }
}