const SellerCard = ({ filterData }) => {
  return (
    <div className="sellerCardContainer">
      {filterData &&
        filterData.map(({ _id, name, profileImg }) => {
          return (
            <div key={_id} className="sellerCard">
              <img height="50" width="50" src={profileImg} alt="" />

              <p>Name:{name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default SellerCard;
