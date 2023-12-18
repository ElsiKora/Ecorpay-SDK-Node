import { Base } from '../../base';
import { IPaginationList, User } from '@elsikora/ecorpay-types';
import { EBalanceUrls } from './urls';
export class Balance extends Base {
 async getBalanceList({ limit, page }: IPaginationList): Promise<User.Balance.TResponsePagination> {
  return this.request<User.Balance.TResponsePagination>(EBalanceUrls.USER_BALANCE_LIST, { params: { limit, page }, method: 'GET' })
 }
 async getBalance({ id }: User.Balance.TFindByTd): Promise<User.Balance.TResponsePagination> {
  return this.request<User.Balance.TResponsePagination>(EBalanceUrls.USER_BALANCE.replace(':id', id), { method: 'GET' })
 }
}
