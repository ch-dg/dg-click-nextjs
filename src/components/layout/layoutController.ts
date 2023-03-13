export const LayoutController = () => {
  const date = new Date();
  let thisYear = date.getFullYear();

  return {
    thisYear,
  };
};
