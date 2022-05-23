/*
 * @Author: LiuMeiYu
 * @Date: 2022-05-23 11:09:04
 * @LastEditors: LiuMeiYu
 * @LastEditTime: 2022-05-23 12:18:03
 * @FilePath: \vue3-ts-milky-way\.eslintrc.js
 * @Description:
 *
 * Copyright (c) 2022 by yihua, All Rights Reserved.
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-explicit-any": ["off"],
  },
};
