import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  increaseItem,
} from "../../Topic-27 Redux Tool Kit/CartSlice";

const Card = ({ element }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item._id === element._id);
  const quantity = cartItem?.quantity || 0;

  const words = element.description?.split(" ") || [];
  const shortDescription =
    words.length > 8 ? `${words.slice(0, 8).join(" ")}...` : element.description;

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#d7dfb2] bg-white shadow-sm shadow-[#dce6ae]/50 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(169,191,101,0.28)]">
      <div className="relative overflow-hidden bg-[#f5f8e8] p-4">
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#73884c]">
          {element.rating >= 4.5 ? "Best seller" : "Trending"}
        </span>
        <img
          className="mx-auto h-44 w-full object-contain transition duration-300 group-hover:scale-105"
          src={element.image?.[0]}
          alt={element.category || "Product"}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b8d57]">
              {element.category}
            </p>
            <h3 className="mt-2 text-lg font-bold leading-7 text-[#21310d]">
              {shortDescription || "Curated product"}
            </h3>
          </div>
          <div className="rounded-2xl bg-[#fff6cf] px-3 py-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7f6800]">
              Rating
            </p>
            <p className="text-sm font-bold text-[#2c3009]">{element.rating || 4.5}</p>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#81925d]">
              Starting at
            </p>
            <p className="mt-1 text-2xl font-black text-[#1d2a0f]">
              Rs. {Math.round(element.price || 0)}
            </p>
          </div>

          {quantity > 0 ? (
            <div className="flex items-center rounded-full bg-[#1f7a24] p-1 text-white shadow-lg shadow-[#bddf9f]">
              <button
                type="button"
                className="h-9 w-9 rounded-full text-lg font-bold transition hover:bg-white/10"
                onClick={() => dispatch(decreaseItem(element._id))}
              >
                -
              </button>
              <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
              <button
                type="button"
                className="h-9 w-9 rounded-full text-lg font-bold transition hover:bg-white/10"
                onClick={() => dispatch(increaseItem(element._id))}
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="rounded-full bg-[#1f7a24] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#bddf9f] transition hover:bg-[#16611b]"
              onClick={() => dispatch(addItem(element))}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
