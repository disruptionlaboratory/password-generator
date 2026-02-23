const options = {
    length: 300,
    uppercase: true,
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