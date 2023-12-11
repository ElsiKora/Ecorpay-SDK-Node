import { Base } from '../../base';
import { IPaginationList, User } from '@elsikora/ecorpay-types';
import { EBalanceUrls } from './urls';
export class Balance extends Base {
 async getBalanceList({ limit, page }: IPaginationList): Promise<User.Balance.TResponsePagination> {
  return this.request<User.Balance.TResponsePagination>(EBalanceUrls.USER_BALANCE, { params: { limit, page }, method: 'GET' })
 }
}
