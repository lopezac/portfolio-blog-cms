import { useEffect } from "react";
import { useAuth, useUser } from "@hooks";
import { VioletBtn } from "@components/buttons";
import { Link } from "@components/wrappers";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [currentUser, setCurrentUser] = useUser();

  useEffect(() => {
    console.log("currentUser, user", currentUser, user);
  }, [currentUser]);

  function handleClick() {
    console.log("handleClick run");
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
          <button onClick={handleClick}>Sign Out</button>
        ) : (
          <Link to="/sign-in">
            <VioletBtn>Sign In</VioletBtn>
          </Link>
        )}
      </nav>
    </header>
  );
}
