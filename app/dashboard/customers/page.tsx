export default function Page() {
  const name = ["Kassy", "Kassy", "Kassy", "Kassy", "Kassy", "Kassy"];
  const fontSizes = [
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
  ];
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-yellow-500",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      {name.map((name, index) => (
        <p
          key={index}
          className={`${fontSizes[index % fontSizes.length]} ${
            colors[index % colors.length]
          } font-bold`}
        >
          {name}
        </p>
      ))}
    </div>
  );
}
