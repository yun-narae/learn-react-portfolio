import React from "react";

export default function SvgIcon({
    name,
    size = 24,
    spriteUrl = "/sprite-sheet.svg",
    title,
    className = "",
    decorative = true, // 장식용이면 true, 스크린리더에서 숨김
    ...rest
}) {
    const ariaProps = decorative
        ? { "aria-hidden": true, focusable: false }
        : { role: "img", "aria-label": title || name };

    return (
        <svg
            width={size}
            height={size}
            className={className}
            {...ariaProps}
            {...rest}
        >
            {!decorative && title ? <title>{title}</title> : null}
            <use href={`${spriteUrl}#${name}`} />
        </svg>
    );
}
