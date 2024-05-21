import axios from "axios";

export const apiProcesser = async ({ method, url, data }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
