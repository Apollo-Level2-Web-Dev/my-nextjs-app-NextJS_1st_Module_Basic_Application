import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayouts";

const AdminHomePage = () => {
  return (
    <div>
      <h1>This is admin page</h1>
    </div>
  );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
