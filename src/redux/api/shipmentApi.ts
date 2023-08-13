import { IRowTable } from "@/components/tables/arrivalShipment/rowTable/types";
import { SET_CITY } from "../actions/cityTypeActions";
import { SET_SHIPMENTS } from "../actions/shipmentsActions";
import { rootApi } from "./rootApi";

export const shipmentsApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        getShipments: build.query<NonNullable<IRowTable[]>, unknown>({
            query: () => ({
                url: "/api/shipments",
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch({ type: SET_CITY, payload: data });
                    dispatch({ type: SET_SHIPMENTS, payload: data });
                } catch (error) {}
            },
            providesTags: ["shipmentsTag"],
        }),
        sortShipments: build.mutation<
            NonNullable<IRowTable[]>,
            { shipNumber: string }
        >({
            query: ({ shipNumber }) => ({
                url: "api/shipments/sort",
                params: { shipNumber },
            }),
        }),
    }),
});

export const { useGetShipmentsQuery, useSortShipmentsMutation } = shipmentsApi;
