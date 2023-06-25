import { ActivityType } from "../Activities/Activities";

const ActivityCard = ({ name, date, paymentType, amount, imageUrl }: ActivityType) => {
  return (
    <li className="flex justify-between items-center sm:gap-x-6 py-5">
      <div className="flex gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={imageUrl} alt=""/>
        <div className="min-w-0 flex-auto">
          <p className="text-base sm:text-lg font-bold leading-6 text-gray-900">{name}</p>
          <div className="flex flex-row items-center justify-start">
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">{date}</p>
            <span className="mx-2 w-1 h-1 bg-gray-500 rounded-full translate-y-[2px]"></span>
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">{paymentType}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold leading-6 text-gray-900">- ${amount}</p>
      </div>
    </li>
  );
};

export default ActivityCard;