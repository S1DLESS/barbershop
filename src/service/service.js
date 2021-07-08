export default class DB {

    constructor() {
        this._apiBase = 'http://localhost:5000';
    }

    postData = async (data) => {
        const res = await fetch(`${this._apiBase}/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
        const res = await this.getData('/barber');
        return res.map(this._transformBarber.bind(this));
    }

    getBarber = async (id) => {
        if (id !== null) {
            const barber = await this.getData(`/barber/${id}`);
            return this._transformBarber(barber);
        }
    }

    getAllServices = async () => {
        const res = await this.getData('/service');
        return res.map(this._transformService.bind(this));
    }

    getService = async (id) => {
        if (id !== null) {
            const service = await this.getData(`/service/${id}`);
            return this._transformService(service);
        }
    }

    getTimePageData = async (barberId, serviceId, date) => {

        const allServices = await this.getAllServices()
        const minServiceTime = allServices.map(value => value.time).sort()[0]

        const res = await this.getData('/post');
        const posts = res.map(this._transformPost.bind(this));

        let unavailableTime = []

        
        const filterPosts = posts.filter(element => {
            const a = element.date - Date.parse(date)
            return element.barberId === barberId && (a < 86400000 && a > 0)
        })
    
        filterPosts.forEach((value, id) => {
            unavailableTime[id] = {
                startTime: (value.date - allServices.find(element => element.id === serviceId).time) - Date.parse(new Date(value.date).toDateString()),
                endTime: (value.date + allServices.find(element => element.id === value.serviceId).time) - Date.parse(new Date(value.date).toDateString())
            }
        })
    
        return {
            minServiceTime,
            unavailableTime
        }
    }

    _transformBarber(barber) {
        return {
            id: barber._id,
            name: barber.name,
            description: barber.description,
            img: barber.img
        }
    }

    _transformService(service) {
        return {
            id: service._id,
            title: service.title,
            time: service.time,
            price: service.price,
            description: service.description,
            barber: service.barber
        }
    }

    _transformPost(post) {
        return {
            id: post._id,
            phone: post.phone,
            email: post.email,
            comment: post.comment,
            barberId: post.barberId,
            serviceId: post.serviceId,
            date: post.date
        }
    }
}
