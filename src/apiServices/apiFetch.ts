import { fetchApi } from "./axios";
import { auth, methods } from "./apiEndpoints";
import { API_URL } from "../constants/config";

// LOGIN
export const LoginApi = async (data: any) => {
  try {
    const response = await fetchApi({
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
export const Signup = async (data: any) => {
  try {
    const response = await fetchApi({
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
export const getRoles = async (data: any) => {
  try {
    const response = await fetchApi({
      url: `${API_URL}/${auth.GetRoles}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("SIGNUP ERROR");
  }
};

// ADD EMPLOYEES
export const addEmployee = async (data: any) => {
  try {
    const response = await fetchApi({
      url: `${API_URL}/${auth.AddEmp}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("SIGNUP ERROR");
  }
};

// ADD ROLES
export const addRoles = async (data: any) => {
  try {
    const response = await fetchApi({
      url: `${API_URL}/${auth.AddRole}`,
      method: methods.POST,
      body: data,
    });
    return response;
  } catch (error) {
    console.log("SIGNUP ERROR");
  }
};
