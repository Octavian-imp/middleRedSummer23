import { IRowTable } from "@/components/tables/rowTable/types";
import { SET_CITY } from "../actions/cityTypeActions";
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
                } catch (error) {}
            },
            providesTags: ["shipmentsTag"],
        }),
    }),
});

export const { useGetShipmentsQuery } = shipmentsApi;
