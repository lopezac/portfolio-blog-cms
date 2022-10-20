import { useEffect, useState, useRef } from "react";
import { bool, string } from "prop-types";
import { VioletBtn } from "@components/buttons";
import { BlogApi } from "@services";

export default function PublishButton({ published, id }) {
  const blogApi = BlogApi();
  const firstUpdate = useRef(true);
  const [isPublished, setIsPublished] = useState(published);

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
        await blogApi.updatePost(id, { published: isPublished });
      } catch (err) {
        throw Error("Error updating post at CMS btn", err);
      }
    }
    updatePost();
  }, [isPublished]);

  return <VioletBtn onClick={handleClick}>{isPublished.toString()}</VioletBtn>;
}

PublishButton.propTypes = {
  published: bool,
  id: string,
};
