import { useParams } from "react-router-dom";


const ProfessorDetails = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
    </div>
  );
}

export default ProfessorDetails;