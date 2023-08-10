import { db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
const adsRef = collection(db, "ads");

export const deleteDocById = async (id: string) => {
  const adsDoc = doc(db, "ads", id);

  try {
    await deleteDoc(adsDoc);
  } catch (error: any) {
    return { error: true, message: error.message };
  }

  return { error: false, message: "Successfully Deleted" };
};
