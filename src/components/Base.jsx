import BlogNavbar from "./BlogNavbar";

const Base = ({ children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <BlogNavbar />
      {children}
    </div>
  );
};

export default Base;
