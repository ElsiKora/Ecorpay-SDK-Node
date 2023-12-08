import { Base } from "../../../base";
import { Merchant } from "@elsikora/types-ecorpay";
import { EDepositUrls } from "./urls";
export class Deposit extends Base {
  /**
   * Creates a new deposit.
   * @param {Merchant.Deposit.TCreate} depositData - The data for the deposit to create.
   * @param {string} depositData.way - The identifier of the way to be used for the deposit.
   * @param {number} depositData.amount - The amount of money to deposit.
   * @param {string} depositData.internalID - The internal ID for the transaction.
   * @param {string} depositData.customerID - The customer's unique identifier.
   * @param {string} depositData.description - A description for the deposit.
   * @param {string} depositData.ip - The IP address from which the deposit is made.
   * @returns {Promise<Merchant.Deposit.TResponse>} A promise that resolves to the response of the deposit creation, including details of the deposit.
   */
  async create({
    way,
    amount,
    internalID,
    customerID,
    description,
    ip,
  }: Merchant.Deposit.TCreate): Promise<Merchant.Deposit.TResponse> {
    return this.request<Merchant.Deposit.TResponse>(EDepositUrls.DEPOSIT, {
      data: { way, amount, internalID, customerID, description, ip },
      headers: { ...this.getConfigToSign() },
      method: "POST",
    });
  }
}
