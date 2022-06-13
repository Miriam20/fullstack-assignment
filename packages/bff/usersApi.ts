import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  readonly baseURL: string;

  async getUsers() {
    return await this.get('users');
  }
}
