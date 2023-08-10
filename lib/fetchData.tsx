import { db } from "@/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
const adsRef = collection(db, "ads");

// fetch all ads from  the database
export const fetchAllAds = async () => {
  const q = query(adsRef);
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

// fetch all ads for a specific user
export const fetchUserAds = async (userEmail: string) => {
  const q = query(adsRef, where("userEmail", "==", userEmail));
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

// fetch Ads with ID
export const fetchAd = async (id: string) => {
  const data = await fetchAllAds();

  const results = data.filter((ad) => {
    return ad.id == id;
  });

  return results[0];
};

//  Fetch ads by Category
export const fetchAdsByCategory = async (category: string) => {
  const q = query(adsRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};

//
export const searchAdsByTitle = async (title: string) => {
  const q = query(collection(db, "ads"), where("title", "<=", title));
  const querySnapshot = await getDocs(q);

  const results = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return results;
};
