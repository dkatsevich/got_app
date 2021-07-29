export default class GotServices {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if (!res.ok) {
            throw new Error(`from ${this._apiBase}${url}, with status - ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const chars = await this.getResourse(`/characters?page=5&pageSize=10`);
        return chars.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    getAllBooks = async () => {
        const books = await this.getResourse(`/books`);
        return books.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }
    getAllHouses = async () => {
        const houses = await this.getResourse(`/houses?page=5&pageSize=10`);
        return houses.map(this._transformHouse);
    }
    getHouse = async (id) => {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
        
    }

    checkData = (data) => { 
        if (data) {
            return data;
        } else {
            return "no info...("
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.checkData(char.name),
            gender: this.checkData(char.gender),
            born: this.checkData(char.born),
            died: this.checkData(char.died),
            culture: this.checkData(char.culture),
        };
    }
    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.checkData(house.name),
            region: this.checkData(house.region),
            words: this.checkData(house.words),
            titles: this.checkData(house.titles),
            overlord: this.checkData(house.overlord),
            ancestralWeapons: this.checkData(house.ancestralWeapons),
        };
    }
    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.checkData(book.name),
            numberOfPages: this.checkData(book.numberOfPages),
            publisher: this.checkData(book.publisher),
            released: this.checkData(book.released),
        };
    }
}



