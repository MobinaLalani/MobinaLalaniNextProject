export interface ApiResponse<T> {
  data: T | null;
  isSuccessed: boolean;
  message?: string;
  errors?: [];
}
