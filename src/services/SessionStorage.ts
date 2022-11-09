const SessionStorage = {
  get(key: string): string | null {
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  },
  set(key: string, value: string | null) {
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
