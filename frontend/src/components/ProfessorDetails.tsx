import { useNavigate, useParams } from "react-router-dom";
import professors from "../data/professorsData";

const ProfessorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const foundProfessor = professors.find((prof) => prof.id === Number(id));

  if (!foundProfessor) {
    return (
      <div>
        <h3>Profesor no encontrado</h3>
        <button type="button" onClick={() => navigate(-1)}>
          Volver a la página anterior
        </button>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-6xl mx-auto">
          <div className="text-start mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-300 leading-tight mb-2">
              {foundProfessor.name}
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              División de Ingeniería Eléctrica Electrónica
            </p>
            <p className="text-xl sm:text-2xl font-medium text-gray-400">
              {foundProfessor.position}
            </p>
            <div className="flex flex-row pt-1 text-gray-700 gap-4">
              {foundProfessor.email.trim().length !== 0 ? (
                <>
                  <a
                    href={`mailto: ${foundProfessor.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {foundProfessor.email}
                  </a>
                  <span>/</span>
                </>
              ) : null}

              {foundProfessor.phoneNumber.trim().length !== 0 ? (
                <>
                  <span className="hover:underline">
                    {foundProfessor.phoneNumber}
                  </span>
                  <span>/</span>
                </>
              ) : null}

              {foundProfessor.webSite.trim().length !== 0 ? (
                <>
                  <a
                    href={`${foundProfessor.webSite}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {foundProfessor.webSite.replace(/^https?:\/\//, "")}
                  </a>
                </>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 mb-10 transform -translate-y-3">
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start relative mb-6 md:mb-0">
              <div className="absolute top-2 left-2 bg-blue-200 w-full h-full blur-md opacity-75 transform translate-x-3 translate-y-3 rounded-lg"></div>
              <img
                src={foundProfessor.imageUrl}
                alt={foundProfessor.name}
                className="w-full h-auto max-w-xs md:max-w-none object-cover shadow-lg relative z-10 border-4 border-gray-200 rounded-lg"
              />
            </div>

            <div className="flex-grow w-full md:w-2/3">
              <p className="text-xs leading-relaxed text-gray-700 whitespace-pre-line">
                {foundProfessor.description}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-1 text-lg ">
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="button"
        >
          Volver a la página anterior
        </button>
      </div>
      </div>

      
    );
  }
};

export default ProfessorDetails;
