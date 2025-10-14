// src/components/ImagePreviewModal/ImagePreviewModal.jsx
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon/SvgIcon";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

export default function ImagePreviewModal({ previewUrl, onClose }) {
    const isOpen = Boolean(previewUrl);

    // 훅은 조건문 밖에서 호출 (rules-of-hooks)
    useLockBodyScroll(isOpen);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="image-preview-modal"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div
                className="image-preview-modal__dialog"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={previewUrl}
                    alt="확대 이미지"
                    className="image-preview-modal__img"
                />
                <button
                    type="button"
                    aria-label="닫기"
                    onClick={onClose}
                    className="image-preview-modal__close-button"
                >
                    <SvgIcon name="delete" />
                </button>
            </div>
        </div>
    );
}

ImagePreviewModal.propTypes = {
    previewUrl: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};
