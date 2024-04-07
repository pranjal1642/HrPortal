import axios from "axios";
import { decryptData, encryptData } from "../constants/constants";
interface arguments {
  url: string;
  method: string;
  body: any;
  //   toast: boolean;
}
export const fetchApi = async (args: arguments) => {
  try {
    const { url, method, body /* toast */ } = args;
    const response = await axios({
      method: method,
      url: url,
      data: { data: method === "get" ? body : encryptData(body) },
    });
    return decryptData(response?.data);
  } catch (error) {
    console.log(error, "axioserror");
  }
};
