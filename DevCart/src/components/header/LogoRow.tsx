import img from "/img.png";
import { Link } from "react-router-dom";
import CountryDropdown from "./CountryDropdown";
import SearchBar from "./SearchBar";

export default function Logo() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img src={img} alt="logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              <CountryDropdown />
              <SearchBar/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
