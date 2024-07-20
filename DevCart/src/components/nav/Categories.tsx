import { Button } from "@mui/material";

export default function Categories() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 nav1">
              <Button className="categories">
                <span className="text">ALL CATEGORIES</span>
              </Button>
            </div>
            <div className="col-sm-9 nav2"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
