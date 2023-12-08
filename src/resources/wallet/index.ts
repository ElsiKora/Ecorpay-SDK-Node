import { Authorization } from "../../resources/auth/index";
import { TConfigWallet } from "../../shared/config";
import { Balance } from "./balance";


export class Wallet {
  authorization: Authorization;
  balance: Balance;

  constructor(config?: TConfigWallet | undefined ) {
    this.authorization = new Authorization(config);
    this.balance = new Balance(config);
  }
}