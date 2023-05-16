const PlantStatus = ({ info }) => {
  return (
    <li>
      <div>
        <div>
          <span>Watered on:</span>
          <span>{info.watered_on}</span>
        </div>
        <div>
          <span>Fertilizer added on:</span>
          <span>{info.fert_on}</span>
        </div>
        <div></div>
      </div>
    </li>
  );
};

export default PlantStatus;
