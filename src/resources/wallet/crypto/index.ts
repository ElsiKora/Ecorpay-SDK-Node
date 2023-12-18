import { User } from '@elsikora/ecorpay-types';
import { Base } from '../../base';
import { ECryptoUrls } from './urls';

export class Crypto extends Base {
  async getCryptoWay({ way }: User.CryptoWay.TFindById) {
    return this.request<User.CryptoWay.TResponse>(ECryptoUrls.CRYPTO_WAY.replace(':id', way), { method: 'GET' })
  }
}
