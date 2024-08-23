const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹ {item?.card?.info?.price} / 100</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              alt="Unavailable"
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
