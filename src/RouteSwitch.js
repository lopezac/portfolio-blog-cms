import { Routes, Route } from "react-router-dom";
import PrivateRoute from "@components/routing/PrivateRoute";

export default function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route path="posts" element={<PrivateRoute />}>
          <Route index element={<Posts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path=":postId">
            <Route index element={<PostDetail />} />
            <Route path="update" element={<UpdatePost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>
        </Route>
        <Route path="comments/:commentId" element={<PrivateRoute />}>
          <Route index element={<CommentDetail />} />
          <Route path="update" element={<UpdateComment />} />
          <Route path="delete" element={<DeleteComment />} />
        </Route>
      </Route>
    </Routes>
  );
}
