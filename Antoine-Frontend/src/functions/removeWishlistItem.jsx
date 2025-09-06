import axios from "axios";
import { toast } from "react-hot-toast";

async function DeleteProduct(id) {
    await axios.delete(`${process.env.REACT_APP_API_BASEURL}/whishlist/${id}`);
    toast.error('Deleted ');
}
export default DeleteProduct
