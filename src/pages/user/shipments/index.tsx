import InputCheckbox from "@/components/checkbox/InputCheckbox";
import SelectFilter from "@/components/selectFilter/SelectFilter";
import { TableShipment } from "@/components/tables/TableShipment";
import styles from "./index.module.scss";

const TableShipmentPage = () => {
  return (
    <div className={styles.content__wrapper}>
      <div className={styles.content__toolbar}>
        <div className={styles.toolbar__block}>
          <span className={styles.toolbar__title}>Shipments</span>
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
