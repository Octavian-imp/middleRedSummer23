import { Statuses, TBadge } from "./types";


const Badge = ({ text, status }: TBadge) => {
  if (status === Statuses.success) {
    return <span className="bg-green-100 text-green-600 rounded-lg p-2 capitalize">{text}</span>;
  }
  if (status === Statuses.warning) {
    return <span className="bg-yellow-100 text-yellow-600 rounded-lg p-2 capitalize">{text}</span>;
  }
  if(status === Statuses.danger){
    return <span className="bg-red-100 text-red-600 rounded-lg p-2 capitalize">{text}</span>
  }
  return <span className="bg-gray-100 text-gray-600 rounded-lg p-2 capitalize">{text}</span>
};

export default Badge;
