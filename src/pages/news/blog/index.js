
import { Button } from "antd";
import Link from "next/link";
const BlogHomePage = () => {
    return (
      <div>
        <h1>Nested Blog Index or Home Page</h1>
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </div>
    );
};

export default BlogHomePage;