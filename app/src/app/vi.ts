import {
  INCLUDE_DIGITS,
  INCLUDE_LOWERCASE,
  INCLUDE_SPECIAL_CHARACTERS,
  INCLUDE_UPPERCASE,
  PASSWORD_GENERATOR,
  PASSWORD_LENGTH,
} from "@/app/strings";

export default [
  {
    key: PASSWORD_GENERATOR,
    value: "Trình tạo mật khẩu",
  },
  {
    key: INCLUDE_DIGITS,
    value: "Bao gồm chữ số",
  },
  {
    key: INCLUDE_LOWERCASE,
    value: "Bao gồm chữ thường",
  },

  {
    key: INCLUDE_UPPERCASE,
    value: "Bao gồm chữ hoa",
  },
  {
    key: INCLUDE_SPECIAL_CHARACTERS,
    value: "Bao gồm ký tự đặc biệt",
  },
  {
    key: PASSWORD_LENGTH,
    value: "Độ dài mật khẩu",
  },
];
