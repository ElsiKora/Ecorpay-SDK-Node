import { Wallet } from "./resources/wallet/index";
import { TConfigWallet, TConfigBusiness } from "./shared/config";
import { Business } from "./resources/business/index";

export function isConfigWallet(config: any): config is TConfigWallet {
  return 'jwt' in config && typeof config.jwt === 'string';
}

export function isConfigBusiness(config: any): config is TConfigBusiness {
  return (
    'key' in config &&
    typeof config.key === 'string' &&
    'hash' in config &&
    typeof config.hash === 'string' &&
    'secret' in config &&
    typeof config.secret === 'string'
  );
}

export { Wallet, Business };