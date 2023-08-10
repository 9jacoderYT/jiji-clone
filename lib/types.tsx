export type FormData = {
  category: string;
  location: string;
  youtube: string;
  title: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<string>;
};

export type uploadData = {
  category: string;
  location: string;
  youtube: string;
  title: string;
  userEmail: string;
  description: string;
  price: number | null;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
};

export type adData = {
  title: string;
  negotiable: boolean;
  category: string;
  location: string;
  youtube: string;
  description: string;
  userEmail: string;
  price: number;
  imagesUrl: Array<string>;
  id: string;
  contactNumber: number | null;
};
