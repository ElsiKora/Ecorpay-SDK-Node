import { IPaginationList, User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { EWayUrls } from './urls';

export class Way extends Base {
  async getWayList({ limit, page }: IPaginationList): Promise<User.Way.TResponsePagination> {
    return this.request<User.Way.TResponsePagination>(EWayUrls.WAY_LIST, { params: { limit, page }, method: 'GET' })
  }
  async getWay({ way } : User.Way.TFindById) : Promise<User.Way.TResponse> {
    return this.request<User.Way.TResponse>(EWayUrls.WAY.replace(':id', way), { method: 'GET'})
  }
}
