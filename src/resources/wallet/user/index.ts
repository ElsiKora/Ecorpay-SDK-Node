import { Base } from '../../base';
import { EUserUrls } from './urls';
import { User as UserType } from '@elsikora/ecorpay-types';

export class User extends Base {
  async getUser(): Promise<UserType.Owner.TResponse> {
    return this.request<UserType.Owner.TResponse>(EUserUrls.USER_DATA, { method: 'GET' })
  }
  async updateUserName({ name, refreshToken} : UserType.Owner.TPatch) : Promise<UserType.Owner.TResponse> {
    return this.request<UserType.Owner.TResponse>(EUserUrls.USER_DATA, { method: 'PATCH', data: { name, refreshToken } })
  }
}
