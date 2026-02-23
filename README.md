# Password Generator

This is a simple Web App built using NextJS.

## Password Strength (toggle-able filters)

- A-Za-z characters (ignore letter o | O)
- 1-9 digits (ignore zero digit)
- Special characters: !@£#%^&*()-+{}[]"'|\/?
- Length of password

## The algorithm

Let's keep it simple.  We'll build up a string based on all the filterable values and randomly select one character at a time.

```js
const options = {
    length: 6,
    uppercase: false,
    lowercase: false,
    specialCharacters: false,
    digits: true
}

const generatePassword = (options) => {

    const digits = "123456789";
    const lower = "abcdefghijklmnpqrstuvwxyz";
    const upper = lower.split("").map((i) => (i.toUpperCase())).join(",").replaceAll(",","");
    const specialChars = "!@£#%^&*()-+{}[]\"'|\/?";

    let password = "";

    let world = ""

    if (options.lowercase) {
        world += lower
    }

    if (options.uppercase) {
        world += upper
    }

    if (options.digits) {
        world += digits
    }

    if (options.specialCharacters) {
        world += specialChars
    }

    for (let x = 0; x < options.length; x++) {
        const max  = world.length;
        const idx = Math.floor(Math.random() * max);
        password += world[idx];
    }

    return password;

}

console.log(generatePassword(options))
```

## Specs

- Password must be generated locally
- Re-generate password functionality
- Copy password to clipboard functionality
- Auto-magically re-generate password as filters toggled 
- Internationalization (UI labels displayed based on browser language preference)

## Supporting translations

We'll ensure every UI label is a variable in strings.js and then create an array of translations for each supported language.


```js

// Simulating strings.js
const PASSWORD = "Password";
const UPPERCASE = "Uppercase";
const LOWERCASE = "Lowercase";

// Simulating ko.ks
const ko = [
    {
        key: PASSWORD,
        value: "비밀번호"
    },
    {
        key: UPPERCASE,
        value: "대문자"
    },
    {
        key: LOWERCASE,
        value: "소문자"
    }
]

// Simulating zh.js
const zh = [
    {
        key: PASSWORD,
        value: "密码"
    },
    {
        key: UPPERCASE,
        value: "大写"
    },
    {
        key: LOWERCASE,
        value: "小写"
    }
]

const supportedTranslations = {
    ko,
    zh,
}

const getTranslator = (language) => {
    const translations = supportedTranslations?.[language] ?? []
    return (key) => {
        const translation = translations.find(({ key: k}) => {
            return k === key
        })
        if (!translation) {
            return key
        } else {
            return translation.value
        }
    }
}

const koreanTranslator = getTranslator("ko")
console.log(koreanTranslator(PASSWORD))
console.log(koreanTranslator(UPPERCASE))
console.log(koreanTranslator(LOWERCASE))

const mandarinTranslator = getTranslator("zh")
console.log(mandarinTranslator(PASSWORD))
console.log(mandarinTranslator(UPPERCASE))
console.log(mandarinTranslator(LOWERCASE))

```


## Steps to create NextJS App

- ```npx create-next-app@latest app```
- Custom configuration when prompted: 
  - TS
  - Elint
  - React compiler
  - App Router
  - Not Tailwind (using CSS modules instead)

Okay, so the app/ folder is added to the route folder and everything is set up, including .gitignore inside the folder.

- cd app
- ```npm run dev```
- "You are using Node.js 18.20.3. For Next.js, Node.js version ">=20.9.0" is required."
- Fixed by using `nvm use 20` and then `npm run dev
- http://localhost:3000
