import { useAuth } from "@hooks";
import { PrimaryBtn } from "@components/buttons";
import { Link } from "@components/wrappers";
import StyledHeader from "./Header.styles";
import StyledNavbar from "./NavBar.styles";

export default function Navbar() {
  const { signOut, user } = useAuth();

  function handleClick() {
    signOut();
  }

  return (
    <StyledHeader>
      <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/create">Create Post</Link>
      </StyledNavbar>
      <StyledNavbar>
        {user ? (
          <PrimaryBtn onClick={handleClick}>Sign Out</PrimaryBtn>
        ) : (
          <Link to="/sign-in">
            <PrimaryBtn>Sign In</PrimaryBtn>
          </Link>
        )}
      </StyledNavbar>
    </StyledHeader>
  );
}
