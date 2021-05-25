import dynamic from "next/dynamic";
import config from "../cms/config";

const loader = () => () =>
  import("netlify-cms-app").then((cms) => {
    cms.init({ config });
  });

const CMS = dynamic(loader, { ssr: false, loading: () => <p>Loading...</p> });

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
