import { useAuth } from "@hooks";
import { VioletBtn } from "@components/buttons";
import { Link } from "@components/wrappers";

export default function Navbar() {
  const { signOut, user } = useAuth();

  function handleClick() {
    signOut();
  }

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/posts/create">Create Post</a>
        {user ? (
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
