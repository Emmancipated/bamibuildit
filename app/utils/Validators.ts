export const ValidateText = (text: string) => {
  if (text && text.length >= 3) {
    return text;
  }
  return false;
};

export const ValidateEmail = (email: string) => {
  if (!email && email.length >= 4) return false;
  // let regex = /^\w+([\W]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  return regex.test(email);
};

export const activateButton = (obj: Record<string, boolean>): boolean => {
  return Object.values(obj).every((value) => value === true);
};
