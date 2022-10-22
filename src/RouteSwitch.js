import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/layout";
import SignInForm from "@views/SignInForm/SignInForm";
import HomePage from "@views/Home/HomePage";
import PrivateRoute from "@components/routing/PrivateRoute";
import { PostsPage } from "@views/Posts";
import PostDetail from "@views/Posts/PostDetail/PostDetail";
import CreatePost from "@views/Posts/PostForm/CreatePost";
import UpdatePost from "@views/Posts/PostForm/UpdatePost";
import UpdateComment from "@views/Comments/UpdateComment";

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
            <Route path="delete" element={"<DeletePost />"} />
          </Route>
        </Route>
        <Route path="comments/:commentId" element={<PrivateRoute />}>
          <Route path="update" element={<UpdateComment />} />
          <Route path="delete" element={"<DeleteComment />"} />
        </Route>
      </Route>
    </Routes>
  );
}
