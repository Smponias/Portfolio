// htmlInclude.js
// Dynamically loads HTML partials into the page
export function loadHTMLIncludes() {
  const includes = document.querySelectorAll('[data-include]');
  const promises = Array.from(includes).map(el => {
    const src = el.getAttribute('data-include');
    return fetch(src)
      .then(res => res.text())
      .then(html => {
        const fragment = document.createElement('div');
        fragment.innerHTML = html;
        el.replaceWith(...fragment.childNodes);
      });
  });
  return Promise.all(promises);
}
