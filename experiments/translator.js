
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