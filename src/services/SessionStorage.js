const SessionStorage = {
  get(key) {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  },
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

export default SessionStorage;
