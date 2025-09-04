export default function Inicio() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50 z-2" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-black px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Misión del Aula CISCO
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam
          erat erat nec sapien. Vivamus euismod, nisi vel consectetur euismod,
          nisl nisi aliquam nunc, eget aliquam erat erat nec sapien.
        </p>
      </div>
    </div>
  )
}
