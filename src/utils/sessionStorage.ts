export const sessionStorageSetItem = (key: string, value: string): void => {
  sessionStorage.setItem(key, value);
};

export const sessionStorageGetItem = (key: string): string | null => {
  return sessionStorage.getItem(key);
};
