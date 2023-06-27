import RowTable from "./rowTable";

export const TableShipment = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className=" text-zinc-400 ">
          <tr className="text-left">
            <th className="p-4 bg-white">Destination</th>
            <th className="p-4 bg-white">Shipment number</th>
            <th className="p-4 bg-white">Truck</th>
            <th className="p-4 bg-white text-right">Total weight, kg</th>
            <th className="p-4 bg-white">Status</th>
            <th className="p-4 bg-white">Departure date</th>
            <th className="p-4 bg-white">Arrival date</th>
            <th className="p-4 bg-white">Time delay</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <RowTable
            destStart="Venice"
            destEnd="Moscow"
            shipNumber="b1554894"
            arrDate={new Date(2023, 6, 27, 12, 34)}
            status="Delayed"
            truck="Iveco 1005"
          />
        </tbody>
      </table>
    </div>
  );
};
