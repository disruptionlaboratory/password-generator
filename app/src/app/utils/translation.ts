import ko from "./../ko"
import zh from "./../zh"
import vi from "./../vi"

const supportedTranslations = {
  ko,
  zh,
  vi
}

export const getTranslator = (language: string) => {
  // @ts-ignore
  const translations = supportedTranslations?.[language] ?? []
  return (key: string) => {
    // @ts-ignore
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
