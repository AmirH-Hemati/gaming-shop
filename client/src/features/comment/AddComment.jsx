import { useState } from "react";
import { useAddComment } from "./useAddComment";

function AddComment({ productId, onClose }) {
  const { addComment } = useAddComment();
  const [comment, setComment] = useState("");
  return (
    <div className="flex flex-col w-full p-4 gap-8">
      <h3 className="text-lg font-semibold text-black">
        دیدگاه خود را در رابطه محصول مربوطه وارد کنید
      </h3>
      <textarea
        rows={4}
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border-2 border-black/30 rounded-sm outline-none text-black "
      ></textarea>
      <button
        className="bg-[#0998A8] text-white p-4"
        onClick={() => {
          onClose();
          addComment({ text: comment, productId });
        }}
      >
        ارسال
      </button>
    </div>
  );
}

export default AddComment;
