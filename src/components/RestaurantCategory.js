import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.categories?.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={data?.categories[0]?.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};
export default RestaurantCategory;
