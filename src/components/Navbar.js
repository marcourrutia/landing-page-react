export const Navbar = () => {
  return (
    <ul
      className="nav bg-dark d-flex justify-content-center mb-3"
      data-bs-theme="dark"
    >
      <div className="mt-1 col-4 d-flex justify-content-start">
      <span class="navbar-brand h1 text-white d-flex align-items-center">Mi WEB</span>
      </div>
      <div className="nav col-4 d-flex justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </div>
    </ul>
  );
};
