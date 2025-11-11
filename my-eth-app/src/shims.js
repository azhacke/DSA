// Minimal runtime shims used by the imported App.jsx
// Provide a simple __reactCodeManager and a global ReactCode component
// so code that embeds __reactCodeManager.setCode(...) and uses <ReactCode id=.. /> won't crash.

// storage for code sections
window.__react_codes = window.__react_codes || {};

window.__reactCodeManager = window.__reactCodeManager || {
  setCode: (id, code) => {
    window.__react_codes = window.__react_codes || {};
    window.__react_codes[id] = code;
  },
  getCode: (id) => {
    return (window.__react_codes || {})[id];
  }
};

// Simple ReactCode component exposed as a global so existing JSX that
// references ReactCode (without import) can resolve it as a global var.
// It will render the stored code string (if present) inside a <pre>.
// Minimal ReactCode component: return null (safe).
// We intentionally keep it simple so App can mount without importing a ReactCode module.
window.ReactCode = function ReactCodeGlobal(props) {
  // Later we can enhance to render stored code using a proper React component.
  return null
};

// Expose a simple citations object if not present (App.jsx sets window.citations later too)
window.citations = window.citations || {};
