import "./Footer.css";

export const Footer = (props) => {
  return (
    <footer className="text-bg-dark p-3">
      <div className="headFooter">
        <span>
          <strong>{props.spanText}</strong>
        </span>
        <div className="rrssIcons">
          <a href={props.linkLink} target="_blank">
            <i class={props.iLink}></i>
          </a>
          <a href={props.linkX} target="_blank">
            <i class={props.iX}></i>
          </a>
          <a href={props.linkGitHub} target="_blank">
            <i class={props.iGitHub}></i>
          </a>
        </div>
      </div>
      <hr></hr>
    </footer>
  );
};
