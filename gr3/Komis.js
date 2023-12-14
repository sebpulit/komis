class Komis {
    constructor(nazwa) {
        this.nazwa = nazwa;
        this.samochody = [];
    }
    dodajSamochod(samochod) {
        this.samochody.push(samochod)
    }
    usunSamochod(nazwa, model) {
        for (let i = 0; i <= this.samochody.length; i++) {
            console.log(i)
            if (this.samochody[i].marka == nazwa && this.samochody[i].model == model) {
                this.samochody.splice(i, 1);
                break;
            }
        }
        console.log(this.samochody)
    }
    wyswietlSamochody() {
        let wynik = '';
        this.samochody.forEach(samochod => {
            wynik += `<li>${samochod.marka} ${samochod.model} ${samochod.rocznik} ${samochod.cena} zł</li>
            `;
        })
        return wynik;
    }
    sprawdzCzyIstnieje(marka, model) {
        for (let i = 0; i <= this.samochody.length; i++) {
            if (this.samochody[i].marka == marka && this.samochody[i].model == model) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
}