import CryptoJS from "crypto-js";
import { ENCRYPT_KEY } from "./config";

export const decryptData = (req: any) => {
  try {
    const decryptData = CryptoJS.AES.decrypt(req.body.data, ENCRYPT_KEY);
    const stringData = decryptData.toString(CryptoJS.enc.Utf8);
    req.body = JSON.parse(stringData);
  } catch (error) {
    console.error("Error decrypting data:", error);
  }
};

export const encryptData = (data: any) => {
  try {
    const stringData = JSON.stringify(data);
    const encryptData = CryptoJS.AES.encrypt(
      stringData,
      ENCRYPT_KEY
    ).toString();
    return encryptData;
  } catch (error) {
    console.error("Error encrypting data:", error);
    return null;
  }
};
