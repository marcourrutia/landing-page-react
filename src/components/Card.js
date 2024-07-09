export const Card = () => {
  return (
    <div className="card p-0 rounded-4 overflow-hidden" style={{width: "18rem"}}>
      <img src="https://img.freepik.com/foto-gratis/cerca-hermoso-gato_23-2149216326.jpg?size=626&ext=jpg&ga=GA1.1.183409394.1716342368&semt=ais_hybrid" className="w-100" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
