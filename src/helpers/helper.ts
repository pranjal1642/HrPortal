const disabledCharacters = ["e", "E", "+", "-"];
export const onKeyDown = (evt: any) => {
  return disabledCharacters.includes(evt.key) && evt.preventDefault();
};

export const convertDateToEpoch = (dateString: string) => {
  const date = new Date(dateString);
  const millisecondsSinceEpoch = date.getTime();
  const epochTime = Math.floor(millisecondsSinceEpoch / 1000);
  return epochTime;
};

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
