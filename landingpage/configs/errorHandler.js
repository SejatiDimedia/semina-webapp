import { toast } from "react-toastify";

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === "string") toast.error(message);

      // return Promise.reject(error);
      return Promise.reject(error);
    }
    // For network errors
    return Promise.reject(error);
  }
}
