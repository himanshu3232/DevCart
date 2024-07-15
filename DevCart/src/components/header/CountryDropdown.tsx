import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";

export default function CountryDropdown() {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span style={{marginLeft: 'auto'}}>
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
}
