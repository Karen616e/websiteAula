import InformationCard from "../components/InformationCard";
import professors from "../data/professorsData";

export default function Coordinacion() {
  const professor = professors.filter((professor) => professor.type === 1 || professor.type === 3);

  return (
    <div className="container -my-10 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-25">
        {professor.map((professor) => (
          <InformationCard
            key={professor.id}
            name={professor.name.toUpperCase()}
            position={professor.position}
            description={professor.description}
            imageUrl={professor.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
