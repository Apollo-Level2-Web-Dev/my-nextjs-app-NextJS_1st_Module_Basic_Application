import Image from "next/image";
import NextImage from "../assets/images/next-js-logo.png";

const Album = () => {
  return (
    <div>
      <h1>Using img tag</h1>
      <img
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        alt=""
        width="100%"
      />

      <h1>Using Image Component from Next.JS for Image optimizations</h1>

      <Image
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        alt=""
        width={500}
        height={500}
        layout="responsive"
      />

      <h1>Image Component with local image</h1>

      <Image
        src={NextImage}
        alt=""
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default Album;
