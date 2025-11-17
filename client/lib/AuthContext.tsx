import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import PocketBase, { AsyncAuthStore } from 'pocketbase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const pb = new PocketBase('http://192.168.50.83:8090');

type AuthContextType = {
  user: any | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const store = new AsyncAuthStore({
        save: async (serialized: string) => {
          await AsyncStorage.setItem('pb_auth', serialized);
        },
        clear: async () => {
          await AsyncStorage.removeItem('pb_auth');
        },
        initial: AsyncStorage.getItem('pb_auth'),
      });

      pb.authStore = store;

      // Vänta på att authStore ska ha laddat initial data
      // När initial är en promise, så har store.record + token eventuellt laddats
      if (pb.authStore.isValid) {
        setUser(pb.authStore.record);
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      setUser(authData.record);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message };
    }
  };

  const logout = async () => {
    await pb.authStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth måste användas inom AuthProvider');
  return ctx;
};
