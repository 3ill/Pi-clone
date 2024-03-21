import '../globals.css';

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return <section className="flex  bg-white font-work ">{children}</section>;
};
export default Layout;
