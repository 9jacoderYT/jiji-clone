"use client";
import Alert from "@mui/material/Alert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { currencies } from "@/lib/currencies";
import { location } from "@/lib/location";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useRef, useState } from "react";
import { formValidate } from "@/lib/validations";
import { FormData } from "@/lib/types";

import { useSession } from "next-auth/react";
import { createAd } from "@/lib/uploadData";

const initialState = {
  category: "electronics",
  location: "",
  youtube: "",
  title: "",
  description: "",
  price: 0,
  contactNumber: null,
  negotiable: true,
  images: [],
};

export default function Createadform() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(false);

  const filePickerRef = useRef(null);

  const addImageToPost = (files: any[]) => {
    if (files.length > 10) {
      setError("Please upload maximum of 10 files");
      return;
    }
    let updatedGallary = [];
    for (let i = 0; i < files.length; i++) {
      const newImage = files[i];
      newImage["id"] = Math.random();

      if (
        !files[i].name.match(/\.(jpg|jpeg|png|gif|webp)$/) ||
        files[i].size > 5000000
      ) {
        setError("Image File not Supported, Please ReUpload");
      } else {
        setError(null);
        updatedGallary.push(newImage);
      }
    }
    setFormData({ ...formData, images: updatedGallary });
  };

  const submitData = async () => {
    // clear error field
    setError(null);
    setSuccess(null);
    const userEmail: string = session?.user.email;

    // Validations
    const validationResult: {
      error: boolean;
      message: string;
    } = formValidate({ ...formData });

    if (validationResult.error) {
      setError(validationResult.message);
      return;
    }
    // Start loading spinner

    setLoading(true);
    //Submittion
    const submittionResult = await createAd({ ...formData, userEmail });

    if (submittionResult.error) {
      setError(submittionResult.message);
      return;
    }

    setLoading(false);
    setSuccess("Ad successfully created");
   // setFormData(initialState);
  };

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className=" w-[90%] md:w-[57%] lg:w-[60%] mx-auto">
        <div className="p-3 bg-white mx-auto text-center relative rounded-md">
          Post ad
          <span
            className="absolute right-3 text-green-600 text-sm hover:cursor-pointer"
            onClick={() => setFormData(initialState)}
          >
            Clear
          </span>
        </div>

        <div className="mt-5 p-3 py-7 bg-white mx-auto text-center relative rounded-md space-y-5">
          {/* Start of Form */}

          <TextField
            id="outlined-select-currency"
            select
            label="Category*"
            value={formData.category}
            sx={{ width: "350px" }}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="Select Location*"
            value={formData.location}
            sx={{ width: "350px", marginTop: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          >
            {location.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          {/* Image */}
          <div className="text-left text-sm w-[350px] mx-auto">
            <div className="font-semibold">Add Photo</div>
            <div>
              <small className="text-[#464b4f]">
                Add at least 2 photos for this category
              </small>
              <br />
              <small className="text-[#464b4f]">
                First picture - is the title picture.
              </small>
            </div>
            <span
              className="py-2 flex space-x-3"
              onClick={() => filePickerRef.current.click()}
            >
              <input
                type="file"
                hidden
                multiple
                ref={filePickerRef}
                onChange={(event) => addImageToPost(event.target.files)}
              />
              <AddBoxIcon className="my-auto hover:cursor-pointer" />

              {formData?.images.map((image) => (
                <span key={image.id}>
                  <img
                    src={URL.createObjectURL(image)}
                    className="w-12 h-12"
                    alt="AdImage"
                  />
                </span>
              ))}
            </span>
            <br />
            <small className="text-[#464b4f]">
              Supported formats are .jpg, .gif and .png, 5MB max
            </small>
          </div>

          {/* Image */}

          <TextField
            id="outlined-password-input"
            label="Link to Youtube Video"
            type="text"
            value={formData.youtube}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, youtube: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Title"
            type="text"
            value={formData.title}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Description"
            value={formData.description}
            type="text"
            autoComplete="current-password"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Naira</InputAdornment>
              }
              label="Price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
            />
          </FormControl>
          <br />
          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Contact Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Tel</InputAdornment>
              }
              label="Contact Number"
              type="number"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contactNumber: Number(e.target.value),
                })
              }
            />
          </FormControl>
          <br />
          <div className="text-left w-[350px] mx-auto">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.negotiable}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      negotiable: !formData.negotiable,
                    })
                  }
                />
              }
              label="Negotiable"
            />

            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
          </div>

          <button onClick={submitData} className="btn w-[350px] btn-accent">
            <span
              className={`${loading ? "loading loading-spinner" : ""}`}
            ></span>
            Create Ad
          </button>
        </div>
      </div>
    </div>
  );
}
