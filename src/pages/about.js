import RootLayout from "@/components/Layouts/RootLayouts";

const AboutPage = () => {
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
