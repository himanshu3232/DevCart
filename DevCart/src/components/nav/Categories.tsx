import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

export default function Categories() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 nav1">
              <Button className="categories">
                <span><IoIosMenu/></span>
                <span className="text">ALL CATEGORIES</span>
                <FaAngleDown/>
              </Button>
            </div>
            <div className="col-sm-9 nav2"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
