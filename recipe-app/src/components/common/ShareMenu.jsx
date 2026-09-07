import { Check, Copy, Mail, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import styles from "./common.module.css";

export default function ShareMenu({ title = "Share Platr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const menuRef = useRef(null);
  const pageUrl = window.location.href;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
      } else {
        const copyInput = document.createElement("textarea");
        copyInput.value = pageUrl;
        copyInput.setAttribute("readonly", "");
        copyInput.style.position = "fixed";
        copyInput.style.opacity = "0";
        document.body.appendChild(copyInput);
        copyInput.select();
        document.execCommand("copy");
        document.body.removeChild(copyInput);
      }

      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div ref={menuRef} className={styles.shareMenu}>
      <button
        type="button"
        className={styles.socialButton}
        aria-label="Share Platr"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <Share2 size={20} />
      </button>
      {isOpen && (
        <div className={styles.shareOptions} role="menu">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
          >
            <FaFacebookF size={16} /> Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
          >
            <FaXTwitter size={16} /> X
          </a>
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
            role="menuitem"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
          <a
            href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
            role="menuitem"
          >
            <Mail size={16} /> Email
          </a>
          <button type="button" onClick={handleCopy} role="menuitem">
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
            {isCopied ? "Copied" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
