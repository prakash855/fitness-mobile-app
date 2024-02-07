export const CircularProgress = ({ radius, strokeWidth, progress }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-full h-full" viewBox={`0 0 ${2 * radius} ${2 * radius}`}>
      <circle
        className="text-transparent stroke-current"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        style={{ borderRadius: "15%" }}
      />
      <circle
        className="text-orange-500 stroke-current"
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${radius} ${radius})`}
        style={{ borderRadius: "15%" }}
      />
    </svg>
  );
};
