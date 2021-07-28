export default class GotServices {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if (!res.ok) {
            throw new Error(`from ${this._apiBase}${url}, with status - ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const chars = await this.getResourse(`/characters?page=5&pageSize=10`);
        return chars.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    async getAllBooks() {
        const books = await this.getResourse(`/books?page=5&pageSize=10`);
        return books.map(this._transformBook);
    }
    async getBook(id) {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }
    async getAllHouses() {
        const houses = await this.getResourse(`/houses?page=5&pageSize=10`);
        return houses.map(this._transformHouse);
    }
    async getHouse(id) {
        const house = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(house);
        
    }

    checkData(data) {
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
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        };
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
        };
    }
}



