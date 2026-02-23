export type PasswordOptions = {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  specialCharacters: boolean;
  digits: boolean;
};

export const generatePassword = (options: PasswordOptions) => {
  const digits = "123456789";
  const lower = "abcdefghijklmnpqrstuvwxyz";
  const upper = lower
    .split("")
    .map((i) => i.toUpperCase())
    .join(",")
    .replaceAll(",", "");
  const specialChars = "!@£#%^&*()-+{}[]\"'|\/?";

  let password = "";

  let world = "";

  if (options.lowercase) {
    world += lower;
  }

  if (options.uppercase) {
    world += upper;
  }

  if (options.digits) {
    world += digits;
  }

  if (options.specialCharacters) {
    world += specialChars;
  }

  // To avoid undefined, let's ensure world has some default values
  // In this case, we're gonna punish them with the strongest password
  if (world.length === 0) {
    world += lower;
    world += upper;
    world += digits;
    world += specialChars;
  }

  if (options.length <= 0) {
    options.length = 250
  }

  for (let x = 0; x < options.length; x++) {
    const max = world.length;
    const idx = Math.floor(Math.random() * max);
    password += world[idx];
  }

  return password;
};
