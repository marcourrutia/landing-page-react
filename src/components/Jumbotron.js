export const Jumbotron = (props) => {
    return (
        <div className="h-100 px-4 py-4 text-bg-dark rounded-3 col-12" style={{minWidth: "500px", boxShadow: "10px 10px 10px grey"}}>
          <h2>{props.title}</h2>
          <p>{props.p}</p>
          <button className="btn btn-outline-light" type="button">{props.buttonText}</button>
        </div>
    );
}