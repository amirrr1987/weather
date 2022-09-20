const Card = (props: any) => {
  const { location, current } = props.data;

  if (location || current) {
    return (
      <div className="col-start-4 col-span-6 bg-gray-50 rounded p-4 grid gap-y-4">
        <div className="flex justify-between">
          <div>
            <div>{location.name}</div>
            <div>{location.region}</div>

            <div>{location.country}</div>
          </div>
          <img
            className="h-14"
            src={`https://countryflagsapi.com/svg/${location.country}`}
            alt=""
          />
        </div>
        <div>{location.lat}</div>
        <div>{location.lon}</div>
        <div>{location.localtime}</div>

        <img src={current.condition.icon} alt="" />
        <div>{current.condition.text}</div>
      </div>
    );
  } else {
    return (
      <div className="col-start-4 col-span-6 bg-gray-50 rounded p-4">
        no content
      </div>
    );
  }
};

export default Card;
