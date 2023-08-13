"use client";

import Link from "next/link";

type Props = {
    href: string;
    text: string;
    last: boolean;
};

const Crumb = ({ href, text, last }: Props) => {
    if (last) {
        return (
            <Link href={href} className="text-primary">
                {text}
            </Link>
        );
    }
    return (
        <>
            <Link href={href} className="text-info">
                {text} / 
            </Link>
        </>
    );
};

export default Crumb;
