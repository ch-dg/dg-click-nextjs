const IconLoader = ({ colour = '#06BA50' }): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
            <path
                fill={colour}
                d="M2.236 10.309c0 4.418 3.36 7.777 7.778 7.777v2.223c-5.523 0-10-4.478-10-10h2.222ZM10.014 18.086c4.418 0 7.777-3.36 7.777-7.777h2.223c0 5.522-4.477 10-10 10v-2.223Z"
            />
            <path
                fill={colour}
                d="M17.791 10.309c0-4.419-3.36-7.778-7.777-7.778V.309c5.523 0 10 4.477 10 10H17.79Z"
            />
        </svg>
    )
}

export default IconLoader
