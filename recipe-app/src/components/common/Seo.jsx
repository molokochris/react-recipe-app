import { useEffect } from "react";

const SITE_URL = "https://recipe-app-chi-jade.vercel.app";

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  structuredData,
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    if (image) {
      setMeta("property", "og:image", image);
      setMeta("name", "twitter:image", image);
    }

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    const existingSchema = document.head.querySelector(
      'script[data-platr-schema="true"]',
    );
    existingSchema?.remove();

    if (structuredData) {
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.platrSchema = "true";
      schema.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    }

    return () => {
      document.head
        .querySelector('script[data-platr-schema="true"]')
        ?.remove();
    };
  }, [description, image, path, structuredData, title, type]);

  return null;
}

export { SITE_URL };