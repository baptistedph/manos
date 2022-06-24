import Colab from "../components/colab";
import Project from "../components/project";
import ProjectCard from "../components/ProjectCard";
const Project_page = () => {
    return ( 
        <>
        <ProjectCard />
            <Colab />
                <Project />
        </>
     );
}
 
export default Project_page;