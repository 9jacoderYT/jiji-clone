import { FormData } from "./types";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const createAd = async ({
  category,
  location,
  youtube,
  title,
  description,
  price,
  userEmail,
  contactNumber,
  negotiable,
  images,
}: FormData) => {
  let imagesUrl: Array<string> = [];

  // Upload images and push them to the imagesUrl array
  for (let i = 0; i < images.length; i++) {
    //Put the image in the /userEmail/title/image
    const imageRef = ref(storage, `${userEmail}/${title}/${images[i].name}`);

    const status = await uploadBytes(imageRef, images[i])
      .then((snapshot) => {
        return snapshot;
      })
      .catch((error) => {
        return false;
      });

    if (status) {
      const uploadImgUrl = await getDownloadURL(status.ref).then((url) => {
        return url;
      });
      imagesUrl.push(uploadImgUrl);
    }
  }
  //Submit Data
  const adsCollectionRef = collection(db, "ads");
  try {
    await addDoc(adsCollectionRef, {
      category,
      location,
      youtube,
      title,
      description,
      price,
      userEmail,
      negotiable,
      contactNumber,
      imagesUrl,
    });
  } catch (error) {
    return { error: true, message: "Unable to Submit AD" };
  }

  return {
    error: false,
    message: "Successfully Submitted",
  };
};
