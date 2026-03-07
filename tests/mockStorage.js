// ─── SETUP: Mock localStorage ─────────────────────────────────────────────────
// Replaces the real localStorage with a simple in-memory version so tests
// don't pollute real storage and can run in any environment (e.g. Node.js)
const originalLocalStorage = globalThis.localStorage;
const mockStorage = {};

const localStorageMock = {
  initialize: () => {
    // Temporarily replace official localStorage with mock version for testing
    Object.defineProperty(globalThis, "localStorage", {
      value: localStorageMock,
      writable: true,
      configurable: true,
    });
  },
  restore: () => {
    Object.defineProperty(globalThis, "localStorage", {
      value: originalLocalStorage,
      writeable: true,
      configurable: true,
    });
  },
  getItem: (key) => mockStorage[key] ?? null,
  setItem: (key, value) => {
    mockStorage[key] = value;
  },
  removeItem: (key) => {
    delete mockStorage[key];
  },
  key: (i) => Object.keys(mockStorage)[i] ?? null,
  get length() {
    return Object.keys(mockStorage).length;
  },
  clear: () => {
    Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  },
};

export default localStorageMock;
