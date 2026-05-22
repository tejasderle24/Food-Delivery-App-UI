import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { MenuItem } from '../data/restaurants';

export type CartItem = {
  restaurantId: string;
  restaurantName: string;
  item: MenuItem;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addItem: (restaurantId: string, restaurantName: string, item: MenuItem) => void;
  incrementItem: (menuItemId: string) => void;
  decrementItem: (menuItemId: string) => void;
  getItemQuantity: (menuItemId: string) => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (restaurantId: string, restaurantName: string, item: MenuItem) => {
    setItems((prev) => {
      const found = prev.find((cartItem) => cartItem.item.id === item.id);
      if (found) {
        return prev.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { restaurantId, restaurantName, item, quantity: 1 }];
    });
  };

  const incrementItem = (menuItemId: string) => {
    setItems((prev) =>
      prev.map((cartItem) =>
        cartItem.item.id === menuItemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decrementItem = (menuItemId: string) => {
    setItems((prev) =>
      prev
        .map((cartItem) =>
          cartItem.item.id === menuItemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const getItemQuantity = (menuItemId: string) => {
    return items.find((cartItem) => cartItem.item.id === menuItemId)?.quantity ?? 0;
  };

  const totalItems = useMemo(
    () => items.reduce((sum, cartItem) => sum + cartItem.quantity, 0),
    [items]
  );

  const value: CartContextValue = {
    items,
    totalItems,
    addItem,
    incrementItem,
    decrementItem,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
