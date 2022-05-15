import { useMoralisQuery } from "react-moralis";

const Main = () => {
  const queryCategories = useMoralisQuery("Categories");
  const fetchedCategories = JSON.parse(
    JSON.stringify(queryCategories.data, ["categoryId", "category"])
  );

  console.log(fetchedCategories);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h3>This is for Categories</h3>
        </div>
        <div className="col-lg-9">
          <h3>This is for the Feed</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
