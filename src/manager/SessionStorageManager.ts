const STORAGE_KEY = '__APP__';

const initStorage = {
  questionAnswer: [],
  currentQuestionNumber: 1,
};

interface StorageType {
  questionAnswer: number[];
  currentQuestionNumber: number;
}

class SessionStorageManager {
  private static instance: SessionStorageManager;

  private storage: StorageType;

  private constructor() {
    // singleton
    const stringify = window.sessionStorage.getItem(STORAGE_KEY);
    this.storage = stringify ? JSON.parse(stringify) : initStorage;
    this.load();
  }

  public static getInstance() {
    if (!SessionStorageManager.instance) {
      SessionStorageManager.instance = new SessionStorageManager();
    }

    return SessionStorageManager.instance;
  }

  public getStorage(key: keyof StorageType) {
    return this.storage[key];
  }

  public setStorage(key: keyof StorageType, value: any) {
    this.storage[key] = value;
    this.load();
  }

  public load() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.storage));
  }

  public clear() {
    this.storage = initStorage;
    this.load();
  }
}

export default SessionStorageManager;
