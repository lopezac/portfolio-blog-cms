import { useAuth } from "src/hooks";
import { SecondaryBtn } from "src/components/buttons";
import { Link } from "src/components/wrappers";
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
          <SecondaryBtn onClick={handleClick}>Sign Out</SecondaryBtn>
        ) : (
          <Link to="/sign-in">
            <SecondaryBtn>Sign In</SecondaryBtn>
          </Link>
        )}
      </StyledNavbar>
    </StyledHeader>
  );
}
