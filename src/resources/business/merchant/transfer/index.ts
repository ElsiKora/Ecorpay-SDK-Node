import { Base } from "../../../base";
import { Merchant } from "@elsikora/ecorpay-types";
import { ETransferUrls } from "./urls";
export class Transfer extends Base {
  /**
   * Initiates a new transfer.
   * @param {Merchant.Transfer.TCreate} transferData - The data for the transfer to be created.
   * @param {string} transferData.way - The identifier of the way to be used for the transfer.
   * @param {number} transferData.amount - The monetary amount to be transferred.
   * @param {string} transferData.internalID - An internal identifier for the transaction.
   * @param {string} transferData.customerID - The unique identifier for the customer.
   * @param {string} transferData.purse - The purse information for the transfer.
   * @param {string} transferData.description - A description of the transfer.
   * @param {string} transferData.ip - The IP address from which the transfer request is made.
   * @returns {Promise<Merchant.Transfer.TResponse>} A promise that resolves with the transfer response, containing details of the initiated transfer.
   */
  async create({
    way,
    amount,
    internalID,
    customerID,
    description,
    purse,
    ip,
  }: Merchant.Transfer.TCreate): Promise<Merchant.Transfer.TResponse> {
    return this.request<Merchant.Transfer.TResponse>(ETransferUrls.TRANSFER, {
      data: { way, amount, internalID, customerID, description, ip, purse },
      headers: { ...this.getConfigToSign() },
      method: "POST",
    });
  }
}
