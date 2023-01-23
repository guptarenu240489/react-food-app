import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: 'red' }}>
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">InstMart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
};
export const Title = () => {
  return 'Food Villa';
};
