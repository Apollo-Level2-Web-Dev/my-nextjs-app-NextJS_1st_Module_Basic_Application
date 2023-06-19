import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link"
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const paths = [
    {
      page: "Home",
      route: "/",
    },
    {
      page: "About",
      route: "/about",
    },
    {
      page: "Contact",
      route: "/contact",
    },
    {
      page: "News",
      route: "/news",
    },
    {
      page: "News_Details",
      route: "/news/1",
    },
    {
      page: "Filtered_News",
      route: "/news/details/23-Jun-2022/sports",
    },
    {
      page: "Blog",
      route: "/news/blog",
    },
    {
      page: "Article",
      route: "/news/article/sports",
    },
    {
      page: "Admin",
      route: "/admin",
    },
    {
      page: "Album",
      route: "/album",
    },
    {
      page: "Dashboard",
      route: "/dashboard",
    }
  ];


  return (
    <Layout className="layout">
      <Header
      >
        <Menu
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          <items>
            {paths.map((path, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px 10px",
                }}
                key={index + 1}
                href={path.route}
              >
                {path.page}
              </Link>
            ))}
          </items>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
