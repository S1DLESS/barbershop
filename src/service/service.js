export default class DB {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    postData = async (data) => {
        const res = await fetch(`${this._apiBase}/posts`, {
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

    getTimePageData = async (barberId, serviceId, date) => {

        const allServices = await this.getAllServices()
        const minServiceTime = allServices.map(value => value.time).sort()[0]

        const res = await this.getData('/posts');
        const posts = res.map(this._transformPost.bind(this));

        let unavailableTime = []


        if (!barberId && !serviceId) {

            const allBarbers = await this.getAllBarbers()
            const maxIdBarber = allBarbers.sort(function(a,b) {
                if (a.id > b.id) {
                    return -1
                }
                if (a.id < b.id) {
                    return 1
                }
                return 0
            })[0].id

            let ut = []
            for (let i = 1; i <= maxIdBarber; i++) {
                const f = posts.filter(element => {
                    const a = element.date - Date.parse(date)
                    return element.barberId === i && (a < 86400000 && a > 0)
                })
                if (f.length) {
                    let ut2 = []
                    f.forEach((value, id) => {
                        ut2[id] = {
                            startTime: value.date - Date.parse(new Date(value.date).toDateString()),
                            endTime: (value.date + allServices.find(element => element.id === value.serviceId).time) - Date.parse(new Date(value.date).toDateString())
                        }
                    })
                    ut.push(ut2)
                }
            }

            if (ut.length) {
                for (let i = 32400000; i <= 73800000; i += 900000) {
                    
                }
            } else {
                //[ [{...}, {...}], [...], ... ]
                return {
                    minServiceTime,
                    unavailableTime
                }
            }
            
            
            return {
                minServiceTime,
                unavailableTime
            }
        }


        if (barberId && !serviceId) {
            return {
                minServiceTime,
                unavailableTime: []
            }
        }


        if (!barberId && serviceId) {
            return {
                minServiceTime,
                unavailableTime: []
            }
        }


        if (barberId && serviceId)  {
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

    _transformPost(post) {
        return {
            id: post.id,
            phone: post.phone,
            email: post.email,
            comment: post.comment,
            barberId: post.barberId,
            serviceId: post.serviceId,
            date: post.date
        }
    }
}