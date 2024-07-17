import { Button } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="part3">
        <Button sx={{ mr: 3 }} className="circle">
          <FiUser />
        </Button>
        <div className="ml-auto cart d-flex align-items-center">
          <span className="price">₹302</span>
          <div className="position-relative ml-2">
            <Button className="circle">
              <FaShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
