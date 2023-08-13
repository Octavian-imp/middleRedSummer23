
import { IRowTableSeed } from "../arrivalShipment/rowTable/types";
import CardAvailable from "./cardAvailable/CardAvailable";

type Props = {
    data: IRowTableSeed[];
};

const AvailableShipmentTable = ({ data }: Props) => {
    return (
        <div className={`flex flex-wrap gap-4`}>
            {data &&
                data.map((item) => (
                    <CardAvailable key={item.truck} {...item} />
                ))}
        </div>
    );
};

export default AvailableShipmentTable;
