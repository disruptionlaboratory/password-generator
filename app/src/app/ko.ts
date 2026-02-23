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
    value: "비밀번호 생성기",
  },
  {
    key: INCLUDE_DIGITS,
    value: "숫자 포함",
  },
  {
    key: INCLUDE_LOWERCASE,
    value: "소문자 포함",
  },

  {
    key: INCLUDE_UPPERCASE,
    value: "대문자 포함",
  },
  {
    key: INCLUDE_SPECIAL_CHARACTERS,
    value: "특수문자 포함",
  },
  {
    key: PASSWORD_LENGTH,
    value: "비밀번호 길이",
  },
];
