import Link from "next/link";
import { getStoryById, getAllPaths } from "../../utils/dataFetch";

const Post = ({ post }) => {
  return (
    <>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <div dangerouslySetInnerHTML={createMarkup(post.html)}></div>
    </>
  );
};

const createMarkup = (html) => {
  return { __html: html };
};

export const getStaticProps = async ({ params }) => {
  const post = await getStoryById(params.id);

  return {
    props: {
      post: post.posts[0],
    },
  };
};

export const getStaticPaths = async () => {
  const routes = await getAllPaths();

  return {
    paths: routes,
    fallback: false,
  };
};

export default Post;
