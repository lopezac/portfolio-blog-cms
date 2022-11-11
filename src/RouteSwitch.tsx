import { Routes, Route } from "react-router-dom";
import { Layout } from "src/components/layout";
import SignInForm from "src/views/SignInForm/SignInForm";
import HomePage from "src/views/Home/HomePage";
import PrivateRoute from "src/components/routing/PrivateRoute";
import { PostsPage } from "src/views/Posts";
import PostDetail from "src/views/Posts/PostDetail/PostDetail";
import CreatePost from "src/views/Posts/PostForm/CreatePost";
import UpdatePost from "src/views/Posts/PostForm/UpdatePost";
import { UpdateComment } from "src/views/Comments";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="sign-in" element={<SignInForm />} />
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PrivateRoute />}>
          <Route index element={<PostsPage />} />
          <Route path="create" element={<CreatePost />} />
          <Route path=":postId">
            <Route index element={<PostDetail />} />
            <Route path="update" element={<UpdatePost />} />
          </Route>
        </Route>
        <Route path="comments/:commentId" element={<PrivateRoute />}>
          <Route path="update" element={<UpdateComment />} />
        </Route>
      </Route>
    </Routes>
  );
}
