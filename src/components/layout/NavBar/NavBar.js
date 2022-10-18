import { useState, useEffect } from "react";
import useAuth from "@hooks/useAuth";
import { VioletBtn } from "@components/buttons";
import { Link } from "@components/wrappers";

export default function Navbar() {
  const { user, signOut } = useAuth();
  const [userSignedIn, setUserSignedIn] = useState(user);

  useEffect(() => {
    console.log("userSignedIn, user", userSignedIn, user);
  }, []);

  function handleClick() {
    console.log("handleClick run");
    setUserSignedIn(false);
    signOut();
  }

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/posts/create">Create Post</a>
        {userSignedIn ? (
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
