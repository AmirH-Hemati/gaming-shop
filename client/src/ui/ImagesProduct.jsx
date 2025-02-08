import FormLabel from "./FormLabel";

function ImagesProduct({ previowImages, handelOtherImage }) {
  return (
    <FormLabel label="عکس  های اسلایدر محصولات">
      <label
        htmlFor="images"
        className=" cursor-pointer w-1/2 h-20 p-1 rounded-sm  flex gap-2 text-lg items-center justify-center border-2 border-dashed border-black"
      >
        {previowImages?.length > 0 ? (
          previowImages?.map((image, index) => (
            <img
              src={image}
              key={index}
              className="w-20 h-18 object-cover rounded-sm"
            />
          ))
        ) : (
          <div>+ </div>
        )}

        <input
          type="file"
          className="hidden"
          id="images"
          name="images"
          multiple
          onChange={handelOtherImage}
        />
      </label>
    </FormLabel>
  );
}

export default ImagesProduct;
