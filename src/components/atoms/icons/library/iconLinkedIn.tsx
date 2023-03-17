const IconLinkedIn = ({ colour = "#fff" }): JSX.Element => {
  return (
    <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.75 0.625H2.19141C1.19531 0.625 0.375 1.50391 0.375 2.55859V25C0.375 26.0547 1.19531 26.875 2.19141 26.875H24.75C25.7461 26.875 26.625 26.0547 26.625 25V2.55859C26.625 1.50391 25.7461 0.625 24.75 0.625ZM8.28516 23.125H4.41797V10.6445H8.28516V23.125ZM6.35156 8.88672C5.0625 8.88672 4.06641 7.89062 4.06641 6.66016C4.06641 5.42969 5.0625 4.375 6.35156 4.375C7.58203 4.375 8.57812 5.42969 8.57812 6.66016C8.57812 7.89062 7.58203 8.88672 6.35156 8.88672ZM22.875 23.125H18.9492V17.0312C18.9492 15.625 18.9492 13.75 16.957 13.75C14.9062 13.75 14.6133 15.332 14.6133 16.9727V23.125H10.7461V10.6445H14.4375V12.3438H14.4961C15.0234 11.3477 16.3125 10.293 18.1875 10.293C22.1133 10.293 22.875 12.9297 22.875 16.2695V23.125Z"
        fill={colour}
      />
    </svg>
  );
};

export default IconLinkedIn;