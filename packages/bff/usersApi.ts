import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  readonly baseURL: string;

  async getUsers() {
    return await this.get('users');
  }
}
