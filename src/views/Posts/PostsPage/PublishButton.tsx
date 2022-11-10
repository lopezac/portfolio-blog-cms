import { useEffect, useState, useRef } from "react";
import { PrimaryBtn, SecondaryBtn } from "src/components/buttons";
import { BlogApi } from "src/services";
import { useSocket } from "src/hooks";

type TPublishButton = { published: boolean; id: string };

export default function PublishButton({ published, id }: TPublishButton) {
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
        if (!socket) return;
        const post = await blogApi.updatePost(id, { published: isPublished });
        if (isPublished) {
          socket.emit("post:publish", post);
        } else {
          socket.emit("post:unpublish", post);
        }
      } catch (err) {
        throw Error("Error updating post at CMS btn", err as ErrorOptions);
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
