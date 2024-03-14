export const RoadMapCard = ({
  month,
  goals,
  color,
}: {
  month: string;
  goals: string[];
  color?: string;
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center uppercase text-primary">
          {month}
        </h2>
        {goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </div>
    </div>
  );
};

export default RoadMapCard;
