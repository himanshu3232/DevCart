import CategoriesRow from "./CategoriesRow";
import CategoriesCol from "./CategoriesCol";

export default function NavCollection() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <CategoriesRow />
            <CategoriesCol />
          </div>
        </div>
      </nav>
    </>
  );
}
