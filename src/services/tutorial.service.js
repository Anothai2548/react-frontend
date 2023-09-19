import http from '../http-common'

class TutorialDataService {
    getAll() {
        return http.get('/tutorials')
    }

    getId(id) {
        return http.get(`/tutorials/${id}`)
    }

    findByTitle(title) {
        return http.get(`/tutorials?title=${title}`)
    }

    create(data) {
        return http.post('/tutorials', data)
    }

    update(id, data) {
        return http.put(`/tutorials/${id}`, data)
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`)
    }

    deleteAll() {
        return http.delete('/tutorials')
    }
}

export default new TutorialDataService()