import { fetchApi } from "./axios";
import { auth, methods } from "./apiEndpoints";
import { API_URL } from "../constants/config";

// LOGIN
export const LoginApi = (data: any) => {
  try {
    const response = fetchApi({
      url: `${API_URL}/${auth.Login}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("LOGIN ERROR");
  }
};

// SIGNUP
export const Signup = (data: any) => {
  try {
    const response = fetchApi({
      url: `${API_URL}/${auth.Signup}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("SIGNUP ERROR");
  }
};

// FETCH ROLES
export const getRoles = (data: any) => {
  try {
    const response = fetchApi({
      url: `${API_URL}/${auth.GetRoles}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("SIGNUP ERROR");
  }
};

// FETCH ROLES
export const addEmployee = (data: any) => {
  try {
    const response = fetchApi({
      url: `${API_URL}/${auth.AddEmp}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("Employee ERROR");
  }
};
