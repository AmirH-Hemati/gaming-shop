import { FormLabel } from "@mui/material";

function TextArea({ name }) {
  return (
    <FormLabel label="توضیحات">
      <textarea
        rows={4}
        name={name}
        id="description"
        className="outline-none w-full md:w-1/2 text-black border-2 border-black/30 rounded-sm"
      ></textarea>
    </FormLabel>
  );
}

export default TextArea;
