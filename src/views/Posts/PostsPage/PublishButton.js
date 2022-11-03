import { useEffect, useState, useRef } from "react";
import { bool, string } from "prop-types";
import { PrimaryBtn, SecondaryBtn } from "@components/buttons";
import { BlogApi } from "@services";
import { useSocket } from "@hooks";

export default function PublishButton({ published, id }) {
  const blogApi = BlogApi();
  const firstUpdate = useRef(true);
  const [isPublished, setIsPublished] = useState(published);
  const socket = useSocket();

  function handleClick() {
    setIsPublished(!isPublished);
  }

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    async function updatePost() {
      try {
        const post = await blogApi.updatePost(id, { published: isPublished });
        if (isPublished) {
          socket.emit("post:publish", post);
        } else {
          socket.emit("post:unpublish", post);
        }
      } catch (err) {
        throw Error("Error updating post at CMS btn", err);
      }
    }
    updatePost();
  }, [isPublished]);

  return isPublished ? (
    <SecondaryBtn onClick={handleClick}>True</SecondaryBtn>
  ) : (
    <PrimaryBtn onClick={handleClick}>False</PrimaryBtn>
  );
}

PublishButton.propTypes = {
  published: bool,
  id: string,
};
