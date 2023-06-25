import ActivityCard from "../ActivityCard";
import data from "../../db";

export type ActivityType = {
  name: string,
  date: string,
  paymentType: string,
  amount: number,
  imageUrl: string
};

const Activities = () => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map(activity => <ActivityCard
        name={activity.name}
        date={activity.date}
        paymentType={activity.paymentType}
        amount={activity.amount}
        imageUrl={activity.imageUrl}
      />)}
    </ul>
  );
};

export default Activities;