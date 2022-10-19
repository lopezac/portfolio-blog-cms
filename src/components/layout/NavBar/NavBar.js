import { useAuth, useUser } from "@hooks";
import { VioletBtn } from "@components/buttons";
import { Link } from "@components/wrappers";

export default function Navbar() {
  const { signOut } = useAuth();
  const [currentUser, setCurrentUser] = useUser();

  function handleClick() {
    setCurrentUser(false);
    signOut();
  }

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/posts/create">Create Post</a>
        {currentUser ? (
          <VioletBtn onClick={handleClick}>Sign Out</VioletBtn>
        ) : (
          <Link to="/sign-in">
            <VioletBtn>Sign In</VioletBtn>
          </Link>
        )}
      </nav>
    </header>
  );
}
