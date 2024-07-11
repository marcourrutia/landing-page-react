export const Navbar = () => {
  return (
    <ul
      className="nav bg-dark d-flex justify-content-center mb-3"
      data-bs-theme="dark"
    >
      <div className="mt-1 col-4 d-flex justify-content-start">
      <h4 class="font-monospace text-white d-flex align-items-center">/devMarco</h4>
      </div>
      <div className="nav col-4 d-flex justify-content-end">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Contact
          </a>
        </li>
      </div>
    </ul>
  );
};
