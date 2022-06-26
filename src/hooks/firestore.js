import { useEffect, useState } from "react";
import {
  addFirebaseItem,
  deleteFirebaseItem,
  getFirebaseItems,
  updateFirebaseItem,
} from "../lib/firebase";

function useFirestore() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    const items2 = await getFirebaseItems();
    setItems(items2);
  };

  const addItem = async (item) => {
    await addFirebaseItem(item);
    setItems([...items, item]);
  };

  const updateItem = async (item) => {
    const newItem = { ...item, done: !item.done };
    await updateFirebaseItem(newItem);
  };

  const clearItems = () => {
    items.map(async (item) => {
      await deleteFirebaseItem(item);
    });
    setItems([]);
  };

  return [items, addItem, updateItem, clearItems];
}

export default useFirestore;
