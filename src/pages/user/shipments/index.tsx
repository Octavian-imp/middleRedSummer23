import InputCheckbox from "@/components/checkbox/InputCheckbox";
import SelectFilter from "@/components/selectFilter/SelectFilter";
import { TableShipment } from "@/components/tables/TableShipment";

const TableShipmentPage = () => {
  return (
    <div className="flex flex-col xl:w-3/4 ml-auto my-3 mr-3">
      <div className="flex justify-between mb-16">
        <div className="flex items-center gap-2">
          <span className="mr-4 font-semibold text-2xl">Shipments</span>
          <InputCheckbox id="arrivalId" name="arrivalName" label="Arrival" />
          <InputCheckbox
            id="availableId"
            name="availableName"
            label="Available"
          />
          <InputCheckbox
            id="departureId"
            name="departureName"
            label="Departure"
          />
        </div>
        <div className="flex items-center gap-2">
          <SelectFilter
            label="Sort by"
            values={["delayed", "date"]}
            defaultValue="delayed"
          />
          <SelectFilter
            label="Arrival date"
            values={["15.06.2023", "16.06.2023"]}
            defaultValue="15.06.2023"
          />
        </div>
      </div>
      <TableShipment />
    </div>
  );
};

export default TableShipmentPage;
