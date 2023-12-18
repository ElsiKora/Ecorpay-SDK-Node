import { User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { ETransferUrls } from './urls';

export class Transfer extends Base {
  async create(data: User.Transfer.TCreate): Promise<User.Transfer.TResponseCreate> {
    return this.request<User.Transfer.TResponseCreate>(ETransferUrls.CREATE_TRANSFER, {  data, method: 'POST' })
  }
  async getTransferList(data: User.Transfer.TPaginationFilters): Promise<User.Transfer.TResponsePagination> {
    return this.request<User.Transfer.TResponsePagination>(ETransferUrls.TRANSFER_LIST, {  data, method: 'GET' })
  }
  async getDeposit({ way }: User.Transfer.TFindById ): Promise<User.Transfer.TResponse> {
    return this.request<User.Transfer.TResponse>(ETransferUrls.TRANSFER.replace(':id', way), {  method: 'GET' })
  }
}
