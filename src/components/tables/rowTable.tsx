import Badge from "../badges/Badges";
import { Statuses } from "../badges/types";

interface IRowTable {
  destStart: string;
  destEnd: string;
  shipNumber: string;
  truck: string;
  totalWeight?: number | null;
  status: "Delayed" | "On way" | "Arrived";
  depDate?: Date | "-";
  arrDate?: Date | "-";
  timeDelay?: Date | "-";
}

const RowTable = ({
  destStart,
  destEnd,
  shipNumber,
  truck,
  totalWeight = null,
  status,
  depDate = "-",
  arrDate = "-",
  timeDelay = "-",
}: IRowTable) => {
  return (
    <tr className="font-semibold border-b-2 border-b-zinc-300">
      <td className="pl-4">
        {destStart} - {destEnd}
      </td>
      <td className="p-4">{shipNumber}</td>
      <td className="p-4">{truck}</td>
      <td className="text-right">{totalWeight}</td>
      <td className="p-4">
        <Badge text={status} status={Statuses.danger} />
      </td>
      <td className="p-4">
        {depDate instanceof Date
          ? depDate.toLocaleString("ru-RU", {
              day: "numeric",
              month: "long",
            })
          : "-"}
      </td>
      <td className="p-4">
        {arrDate instanceof Date
          ? arrDate.toLocaleString("ru-RU", {
              day: "numeric",
              month: "long",
            })
          : "-"}
      </td>
      <td className="pr-4">
        {timeDelay instanceof Date
          ? timeDelay.toLocaleString("ru-RU", {
              day: "numeric",
              month: "long",
            })
          : "-"}
      </td>
    </tr>
  );
};

export default RowTable;
