import { useState, useEffect, useCallback } from "react";

const HISTORY_STORAGE_KEY = "closet-history";
const EVENT_KEY = "closet_history_updated";

// Helper to read from storage safely
const getStoredHistory = () => {
  try {
    const item = window.localStorage.getItem(HISTORY_STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.error("Error reading history:", error);
    return [];
  }
};

export default function useClosetHistory() {
  // 1. Initialize state directly from LocalStorage
  const [history, setHistory] = useState(getStoredHistory);

  // 2. Listen for updates from ANY component (or other tabs)
  useEffect(() => {
    const syncState = () => setHistory(getStoredHistory());

    window.addEventListener(EVENT_KEY, syncState); // Listen for same-tab updates
    window.addEventListener("storage", syncState); // Listen for cross-tab updates

    return () => {
      window.removeEventListener(EVENT_KEY, syncState);
      window.removeEventListener("storage", syncState);
    };
  }, []);

  // 3. Helper to write to storage and notify everyone
  const updateStorage = (newHistory) => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory));
    setHistory(newHistory);
    window.dispatchEvent(new Event(EVENT_KEY)); // <--- This triggers the update in the Sidebar!
  };

  const addHistory = useCallback((payload) => {
    const current = getStoredHistory();
    const incoming = {
      pinned: false,
      createdAt: payload?.createdAt || new Date().toISOString(),
      ...payload,
    };
    const existing = current.filter((h) => h.id !== incoming.id);
    const next = [incoming, ...existing].slice(0, 10);
    updateStorage(next);
  }, []);

  const deleteEntry = useCallback((id) => {
    const current = getStoredHistory();
    const next = current.filter((h) => h.id !== id);
    updateStorage(next);
  }, []);

  const togglePin = useCallback((id) => {
    const current = getStoredHistory();
    const next = current.map((h) => (h.id === id ? { ...h, pinned: !h.pinned } : h));
    const pinned = next.filter((h) => h.pinned);
    const unpinned = next.filter((h) => !h.pinned);
    updateStorage([...pinned, ...unpinned]);
  }, []);

  return { history, addHistory, deleteEntry, togglePin };
}
