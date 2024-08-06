import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";

export default function CountryDropdown() {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span style={{ marginLeft: "auto" }}>
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={true} className="location-modal">
        <h4>Choose your delivery location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>

        <div className="headerSearch w-75">
          <input type="text" placeholder="Search for products" />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
      </Dialog>
    </>
  );
}
