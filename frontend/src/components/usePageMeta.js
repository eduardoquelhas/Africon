import { useEffect } from "react";

export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", description);
    const ensureOg = (prop) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      return el;
    };
    ensureOg("og:title").setAttribute("content", title);
    ensureOg("og:description").setAttribute("content", description);
  }, [title, description]);
}
