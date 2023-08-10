import { FormData } from "./types";

export const formValidate = ({
  category,
  location,
  title,
  description,
  price,
  contactNumber,
  images,
}: FormData) => {
  //  Check if any field is  empty

  console.log({
    category,
    location,
    title,
    description,
    price,
    contactNumber,
    images,
  });

  if (
    !category ||
    !location ||
    !title ||
    !description ||
    !price ||
    images.length < 2 ||
    !contactNumber
  ) {
    return { error: true, message: "Incomplete Form. Please re-check" };
  }

  if (title.length < 10) {
    return { error: true, message: "Title must be at least 10 characters" };
  }

  if (description.length < 30) {
    return {
      error: true,
      message: "Description must be at least 30 characters",
    };
  }

  if (isNaN(price)) {
    return {
      error: true,
      message: "Price must be a number",
    };
  }

  if (isNaN(contactNumber)) {
    return {
      error: true,
      message: "Contact must be a Number",
    };
  }

  return { error: false, message: "Validated Successfully" };
};
