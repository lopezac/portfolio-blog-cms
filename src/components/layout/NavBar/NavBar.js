import useAuth from "@hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/posts/create">Create Post</a>
        {user ? <a></a> : <VioletBtn href="/sign-in">Sign In</VioletBtn>}
      </nav>
    </header>
  );
}
