const FurnitureItem = (data) => {
  const { filteredItem } = { data };
  return (
    <div className="furniture-image">
      <img
        src={`${filteredItem[0].image}`}
        className="imgfurniture_select"
        alt="Furniture"
      />
      <h1 className="name_furniture_select">{filteredItem[0].name}</h1>
      <p className="description_furniture_select">
        {filteredItem[0].description}
      </p>
      <p className="price_furniture_select">
        <span>Price:</span>
        <span>{filteredItem[0].price}</span>
      </p>
      <p className="warranty_furniture_select">
        <span>Waranty:</span>
        <span>
          {filteredItem[0].warranty}
          years
        </span>
      </p>
      <p className="production_furniture_select">
        <span>Production date:</span>
        <span>{filteredItem[0].created_at}</span>
      </p>
      <button type="submit" className="reserver_furniture">
        Reserve
        <i className="fa fa-arrow-circle-o-right" />
      </button>
      <button type="submit" className="back_furniture">
        {' '}
        <i className="fa fa-arrow-left" />
        {' '}
      </button>
    </div>
  );
};

export default FurnitureItem;
