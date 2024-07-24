import { Link } from "react-router-dom";

export default function CategoriesCol() {
  return (
    <>
      <div className="col-sm-9 nav2 d-flex align-items-center">
        <ul className="list list-inline w-100">
          <li className="list-inline-item">
            <Link to={'/'}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/fashion'}>Fashion</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/electronics'}>Electronics</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/bakery'}>Bakery</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/groceries'}>Groceries</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/blog'}>Blog</Link>
          </li>
          <li className="list-inline-item">
            <Link to={'/contact-us'}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
