import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { MdPhonelink } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { CiHeadphones } from "react-icons/ci";

export default function CategoriesCol() {
  return (
    <>
      <div className="col-sm-9 nav2 d-flex align-items-center">
        <ul style={{ marginLeft: "auto" }} className="list list-inline">
          <li className="list-inline-item">
            <Link to={"/"}>
              <CiHome /> &nbsp; Home
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/fashion"}>
              <GiClothes /> &nbsp;Fashion
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/electronics"}>
              <MdPhonelink /> &nbsp;Electronics
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/bakery"}>
              <MdOutlineEmojiFoodBeverage /> &nbsp;Bakery
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/groceries"}>
              <GiFruitBowl /> &nbsp;Groceries
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/blog"}>
              <TfiWrite /> &nbsp;Blog
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to={"/contact-us"}>
              <CiHeadphones /> &nbsp;Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
