import { Deposit } from "./deposit";
import { Transfer } from "./transfer";
import { Ways } from "./ways";
import { TConfigBusiness } from "../../../shared/config";
import { EAuthenticationMerchantAlgorithm } from "../../../shared/signHeaders";

export class Merchant {
  ways: Ways;
  deposit: Deposit;
  transfer: Transfer;
  
  prepareConfig(config: TConfigBusiness) {
    if (typeof config.hash === "undefined")
      config.hash = EAuthenticationMerchantAlgorithm.SHA_512;

    return config;
  }

  constructor(config: TConfigBusiness | undefined ) {
    config = typeof config !== 'undefined' ? this.prepareConfig(config) : undefined;
    this.ways = new Ways(config);
    this.deposit = new Deposit(config);
    this.transfer = new Transfer(config);
  }
}