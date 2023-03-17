interface IClassNames {
  [key: string]: string;
}

interface IButtonController {
  classNames: IClassNames;
}

export const ButtonController = (): IButtonController => {
  const classNames: IClassNames = {
    global:
      "flex items-center justify-center py-5 px-10 text-lg leading-4 rounded",
    primary: "text-white bg-primary",
    secondary: "text-primary bg-white",
    disabled: "text-white bg-[#707070] cursor-not-allowed",
  };

  return {
    classNames,
  };
};
