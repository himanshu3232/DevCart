import { IoIosSearch } from "react-icons/io";
import Button from "@mui/material/Button";

export default function SearchBar() {
  return (
    <>
      <div className="headerSearch">
        <input type="text" placeholder="Search for products"/>
        <Button>
          <IoIosSearch />
        </Button>
      </div>
    </>
  );
}
