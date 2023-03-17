const IconProtected = ({ colour = '#06BA50' }): JSX.Element => {
    return (
        <svg viewBox="0 0 24 26" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.5 4.40391L12.9 0.403906C12.65 0.303906 12.25 0.253906 12 0.253906C11.7 0.253906 11.3 0.303906 11.05 0.403906L1.45 4.40391C0.55 4.80391 0 5.65391 0 6.60391C0 19.5039 9.45 25.8039 11.95 25.8039C14.55 25.8039 24 19.4039 24 6.60391C24 5.65391 23.4 4.80391 22.5 4.40391ZM16.8 10.2039C16.8 10.5039 16.7 10.8039 16.5 11.0039L11.7 16.6039C11.35 17.0039 10.9 17.0039 10.8 17.0039C10.45 17.0039 10.15 16.8539 9.95 16.6539L7.55 14.2539C7.3 14.0539 7.2 13.7539 7.2 13.4039C7.2 12.7539 7.7 12.2039 8.4 12.2039C8.7 12.2039 9 12.3039 9.2 12.5539L10.7 14.0039L14.65 9.40391C14.9 9.10391 15.25 9.00391 15.6 9.00391C16.5 9.00391 16.8 9.85391 16.8 10.2039Z"
                fill={colour}
            />
        </svg>
    )
}

export default IconProtected
