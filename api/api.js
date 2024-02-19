const axios = require('axios').default

export default class API {
  static get baseurl() {
    return 'https://localhost:8001/'
  }

  static async getElements() {
    const data = await axios.get(`${this.baseurl}/elements`)

    return data
  }

  static async getNews() {
    const data = await axios.get(`${this.baseurl}/news`)

    return data
  }

  static async getComments() {
    const data = await axios.get(`${this.baseurl}/comments`)

    return data
  }

  static async addComment(commentBody) {
    const data = await axios.post(`${this.baseurl}/elements`, commentBody)

    return data
  }
}
