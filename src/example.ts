import { Business  } from './index';


const ecorpayClient = new Business({  key: "a38ef626-ba83-4d32-acda-52820a0acdeb",  secret: "0e5e4fa6-afa7-4176-9312-8fa3bdf14aa6", hashingAlgorithm: "SHA256" });


ecorpayClient.merchant.ways.getMerchantWayList({ limit: 10, page: 1 }).then((res) => {
  console.log("res", res)
}).catch((e) => {
  console.log("zalypa");
  console.log(e);
});