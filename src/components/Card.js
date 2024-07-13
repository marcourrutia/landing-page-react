export const Card = (props) => {
  return (
    <div
      className="card col-3 p-0 overflow-hidden rounded-3"
      style={{ maxWidth: "225px", minWidth: "225px", boxShadow: "10px 10px 8px grey" }}
    >
      <div className="d-flex justify-content-center align-items-center" style={{width: "100%", height:"200px", backgroundColor: "aliceblue"}}>
        <img
          src={props.cardImage} style={{width: "100%"}}
          alt="..."
        />
      </div>
      <div className="card-body text-bg-dark d-flex flex-column">
        <h5 className="card-title">{props.cardTitle}</h5>
        <hr className="m-2"/>
        <p className="card-text">{props.cardText}</p>
        <a href="#" className="btn btn-outline-light mt-auto">{props.buttonText}</a>
      </div>
    </div>
  );
};
