import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

const HText = ({ children, className }: Props) => {
    return (
        <h1 className={`${className} basis-3/5 font-montserrat text-3xl font-bold`}>{children}</h1>
    )
}

export default HText;