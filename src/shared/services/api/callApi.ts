import { AuthPresent, PreAuthView } from "@/constants/cookie";
import { HttpMethod } from "@/shared/types/enums/common/httpMethod";
import { HttpStatus } from "@/shared/types/enums/common/httpStatus";
import { ApiResponse } from "@/shared/types/models/apiResponse.model";
import { ExceptionResponse } from "@/shared/types/models/exceptionResponse.model";
import Cookies from "js-cookie";

const Api = async <T>(
  BaseUrl: string,
  Body: object | null,
  Header: HeadersInit,
  Method: HttpMethod,
  UnAuthorizeRedirection: boolean = true,
): Promise<ApiResponse<T>> => {
  const requestOptions: RequestInit = {
    method: Method,
    headers: Header,
    credentials: "include",
    ...(Method !== HttpMethod.GET && { body: JSON.stringify(Body) }),
  };

  try {
    const response = await fetch(BaseUrl, requestOptions);

    if (response.ok) {
      const data = (await response.json()) as ApiResponse<T>;
      return {
        data: data.data,
        isSuccessed: data.isSuccessed,
        message: data.message,
      };
    } else {
      if (
        response.status === HttpStatus.UNAUTHORIZED ||
        response.status === HttpStatus.FORBIDDEN
      ) {
        {
          Cookies.remove(AuthPresent);
          if (UnAuthorizeRedirection == true) {
            Cookies.set(PreAuthView, window.location.pathname);
            window.location.replace("/login");
          }
        }
        return {
          data: null,
          isSuccessed: false,
          message: "توکن منضی شده است",
        };
      }
      const exception = (await response.json()) as ExceptionResponse;
      return {
        data: null,
        isSuccessed: false,
        message: exception.title,
        errors: exception.errors,
      };
    }
  } catch {
    return {
      data: null,
      isSuccessed: false,
      message: "خطای سیستمی",
    };
  }
};

export default Api;
