

type InformationCardProps = {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
};

const InformationCard = ({
  name,
  position,
  description,
  imageUrl,
}: InformationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center p-6 m-4 max-w-120 mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 relative">
        <div className="absolute -bottom-2 -right-2 bg-blue-200 rounded-full w-32 h-32 blur-md opacity-75"></div>
        <img
          className="h-32 w-32 object-cover border-4 border-gray-200 relative"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-center md:text-left">        
        <h3 className="text-xl font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-blue-600 text-md font-medium mb-2">{position}</p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {description.split('\n')[0]}
        </p>
      </div>
    </div>
  );
};

export default InformationCard;