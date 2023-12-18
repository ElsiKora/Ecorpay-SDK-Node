import { Base } from '../../base';
import { User } from '@elsikora/ecorpay-types';
import { EDepositUrls } from './urls';
export class Deposit extends Base {
  async create({ way, amount }: User.Deposit.TCreate): Promise<User.Deposit.TResponseCreate> {
    return this.request<User.Deposit.TResponseCreate>(EDepositUrls.CREATE_DEPOSIT, {  data: { way, amount }, method: 'POST' })
  }
  async getDepositList(data: User.Deposit.TPaginationFilters): Promise<User.Deposit.TResponsePagination> {
    return this.request<User.Deposit.TResponsePagination>(EDepositUrls.DEPOSIT_LIST, {  data, method: 'GET' })
  }
  async getDeposit({ way }: User.Deposit.TFindById ): Promise<User.Deposit.TResponse> {
    return this.request<User.Deposit.TResponse>(EDepositUrls.DEPOSIT.replace(':id', way), {  method: 'GET' })
  }
}
