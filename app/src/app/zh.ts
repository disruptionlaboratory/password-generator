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
    value: "密码生成器",
  },
  {
    key: INCLUDE_DIGITS,
    value: "请提供需要翻译的英文文本",
  },
  {
    key: INCLUDE_LOWERCASE,
    value: "包含小写",
  },
  {
    key: INCLUDE_UPPERCASE,
    value: "包含大写",
  },
  {
    key: INCLUDE_SPECIAL_CHARACTERS,
    value: "包含特殊字符",
  },
  {
    key: PASSWORD_LENGTH,
    value: "密码长度",
  },
];
