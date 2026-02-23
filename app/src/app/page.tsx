"use client";

import React, { useState, useEffect } from "react";
import { generatePassword, PasswordOptions } from "./utils/password";
import {
  INCLUDE_DIGITS,
  INCLUDE_LOWERCASE,
  INCLUDE_SPECIAL_CHARACTERS,
  INCLUDE_UPPERCASE, PASSWORD_GENERATOR,
  PASSWORD_LENGTH
} from "@/app/strings";
import styles from "./page.module.css";
import { getTranslator } from "@/app/utils/translation";
import Spinner from "@/app/components/icons/Spinner";
import Clipboard from "@/app/components/icons/Clipboard";

export default function Home() {
  const [options, setOptions] = useState<PasswordOptions>({
    digits: true,
    length: 45,
    lowercase: true,
    specialCharacters: false,
    uppercase: true,
  });

  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    setPassword(generatePassword(options));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;

    setOptions((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "length"
            ? Number(value)
            : value,
    }));
  };

  const regenerate = () => setPassword(generatePassword(options));

  const langTag = navigator.language
  const isoCode = langTag.split('-')[0];
  const t = getTranslator(isoCode);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{t(PASSWORD_GENERATOR)}</h1>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label>
            <input
              type="checkbox"
              name="digits"
              checked={options.digits}
              onChange={handleChange}
            />
            {t(INCLUDE_DIGITS)}
          </label>
          <label>
            <input
              type="checkbox"
              name="lowercase"
              checked={options.lowercase}
              onChange={handleChange}
            />
            {t(INCLUDE_LOWERCASE)}
          </label>
          <label>
            <input
              type="checkbox"
              name="uppercase"
              checked={options.uppercase}
              onChange={handleChange}
            />
            {t(INCLUDE_UPPERCASE)}
          </label>
          <label>
            <input
              type="checkbox"
              name="specialCharacters"
              checked={options.specialCharacters}
              onChange={handleChange}
            />
            {t(INCLUDE_SPECIAL_CHARACTERS)}
          </label>
          <label>
            {t(PASSWORD_LENGTH)}
            <input
              type="number"
              name="length"
              min={4}
              max={500}
              value={options.length}
              onChange={handleChange}
            />
          </label>
        </form>
        <button className={styles.clipboard} onClick={() => {
          navigator.clipboard
            .writeText(password)
            .then(() => {
              alert("Copied to clipboard");
            });
        }}><Clipboard strokeColor={"#fff"} /></button>
        <div className={styles.password}>{password}</div>
        <button className={styles.spinner} onClick={regenerate}><Spinner strokeColor={"#fff"} /></button>
      </main>
    </div>
  );
}
