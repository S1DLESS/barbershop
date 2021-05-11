export default class DB {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    postData = async (data) => {
        const res = await fetch(`${this._apiBase}/requests`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res
    }

    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return res.json();
    }

    getAllBarbers = async () => {
        const res = await this.getData('/barbers');
        return res.map(this._transformBarber.bind(this));
    }

    getBarber = async (id) => {
        if (id !== null) {
            const barber = await this.getData(`/barbers/${id}`);
            return this._transformBarber(barber);
        }
    }

    getAllServices = async () => {
        const res = await this.getData('/services');
        return res.map(this._transformService.bind(this));
    }

    getService = async (id) => {
        if (id !== null) {
            const service = await this.getData(`/services/${id}`);
            return this._transformService(service);
        }
    }

    _transformBarber(barber) {
        return {
            id: barber.id,
            name: barber.name,
            description: barber.description
        }
    }

    _transformService(service) {
        return {
            id: service.id,
            title: service.title,
            time: service.time,
            price: service.price,
            description: service.description,
            barber: service.barber
        }
    }
}