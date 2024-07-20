import NavCollection from "../nav/NavCollection";
import LogoRow from "./LogoRow";

export default function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center bg-purple color-white">
              <b>Free shipping</b> on orders above ₹999
            </p>
          </div>
        </div>
        <LogoRow/>
        <NavCollection/>
      </div>
    </>
  );
}
