import LoadData from "../LoadData";
import ProjectCards from "../Projects/ProjectCards";
import "./members.css";

const Members = () => {
  const [data, setData] = LoadData();
  console.log(data)

  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">My Projects</h1>
      
      {
        data?.map(e=><ProjectCards data={e} />)
      }
    </div>
  );
};

export default Members;
