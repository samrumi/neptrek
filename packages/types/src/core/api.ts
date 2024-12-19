export type NTSuccessResponse<T = void> = {
  success: true;
  message: string;
} & (T extends void ? {} : { data: T });

export type NTErrorResponse = {
  success: false;
  error: string;
  isFormError?: boolean;
};
