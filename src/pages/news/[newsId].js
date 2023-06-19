import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is detail page of id: {router.query.newsId} </h1>
    </div>
  );
};

export default NewsDetails;
