import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

export default function Categories() {
  return (
    <>
      <div className="col-sm-3 nav1">
        <Button className="categories align-items-center">
          <span className="icon1">
            <IoIosMenu />
          </span>
          <span className="text">ALL CATEGORIES</span>
          <span className="icon2">
            <FaAngleDown />
          </span>
        </Button>
      </div>
    </>
  );
}
