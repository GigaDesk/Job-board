//Returns the amount of time since the user last signed in i.e zero if the user never signed in
export const SinceSignIn = () => {
  const data = window.localStorage.getItem("LastSignInDate");
  if (data !== null) {
    const Parseddata: Date = JSON.parse(data);
    const now = new Date();
    const timeDifferenceInMilliSeconds =
      now.getTime() - new Date(Parseddata).getTime();
    const timeDifferenceInHours = Math.floor(
      timeDifferenceInMilliSeconds / 3600000
    );
    return timeDifferenceInHours;
  }
  return 0;
};
