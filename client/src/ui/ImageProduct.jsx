import { FormLabel } from "@mui/material";

function ImageProduct({ preview, setPriview }) {
  return (
    <FormLabel label="عکس اصلی محصول">
      <label
        htmlFor="image"
        className=" cursor-pointer w-60 h-20 p-1 rounded-sm  flex justify-center items-center text-xl border-2 border-dashed border-black"
      >
        {preview ? (
          <img
            src={preview}
            alt=""
            className="w-full object-cover h-full rounded-sm"
          />
        ) : (
          <div>+</div>
        )}
        <input
          type="file"
          id="image"
          name="image"
          className="hidden"
          onChange={(e) => setPriview(URL.createObjectURL(e.target.files[0]))}
        />
      </label>
    </FormLabel>
  );
}

export default ImageProduct;
