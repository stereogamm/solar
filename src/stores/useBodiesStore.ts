import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { getBodies } from "../Shared/api/api-client"
import { type Body }  from "../Pages/bodiesListPage/ui/bodiesList"

type Bodies = Body[];

type BodiesStore = {
    loading: boolean;
    bodies: Bodies | null;
    error: unknown;
    fetchBodies: () => Promise<void>;
}



export const useBodiesStore = create<BodiesStore>()(devtools((set) => ({
    loading: false,
    bodies: null,
    error: null,

    fetchBodies : async () => {
        set({loading : true, error: null})

        try{
            const data = await getBodies()
            set({bodies: data.bodies, loading : false})
        } catch(error) {
            set({ error: error, loading: false})
        } 
    }
}

  ),  { name: "bodies-store"}
 )
)


