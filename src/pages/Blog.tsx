import { Artigos } from "../components/blog/Artigos";
import { Entrevistas } from "../components/blog/Entrevistas";
import { Novidades } from "../components/blog/Novidades";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";

const Blog = () => {
  return (
    <>
        <NavBarSkeleton/>
        <Artigos/>
        <Entrevistas/>
        <Novidades/>
    </>
  );
};

export default Blog;