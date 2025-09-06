import axios from "axios";
import { toast } from "react-hot-toast";
async function AddToWishlist(title, author, price, image) {
    await axios.post(`${process.env.REACT_APP_API_BASEURL}/whishlist`, { title, auth: author, img: image, price, qty: 1 });
    toast.success('add to whishlist ');
}
export default AddToWishlist