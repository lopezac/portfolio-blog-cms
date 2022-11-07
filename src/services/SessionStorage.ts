const SessionStorage = {
  get(key: string) {
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  },
  set(key: string, value: string | number | object) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  },
};

export default SessionStorage;
