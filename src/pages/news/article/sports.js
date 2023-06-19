import { Button } from "antd";
import Link from "next/link";
const SportsArticlePage = () => {
  return (
    <div>
      <h1>Nested Article-Sports Page</h1>
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default SportsArticlePage;
