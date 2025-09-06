import axios from "axios";
import { toast } from "react-hot-toast";
export async function AddToCart(title, author, price, image) {
    await axios.post(`${process.env.REACT_APP_API_BASEURL}/cart`, { title, auth: author, price, img: image, qty: 1 });
    toast.success('added to cart');
}
export async function DeleteProductCart(id) {
    await axios.delete(`${process.env.REACT_APP_API_BASEURL}/cart/${id}`);
    toast.error('Deleted ');
}
