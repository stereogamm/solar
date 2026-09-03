import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { returnCustomPositionBodies } from "../Shared/api/api-client/api-client";
import { type Positions } from "../Pages/positionsPage/ui/positions";

type CustomPositionBodies = {
  loading: boolean;
  bodies: Positions | null;
  error: unknown;
  getCustomBodies: (params: Record<string, string>) => Promise<void>;
};

export const useCustomPositionBodiesStore = create<CustomPositionBodies>()(
  devtools(
    (set) => ({
      loading: false,
      bodies: null,
      error: null,

      getCustomBodies: async (params) => {
        set({ loading: true, error: null });

        try {
          const data = await returnCustomPositionBodies(params);

          set({ bodies: data, loading: false });
        } catch (error) {
          set({ error: error, loading: false });
        }
      },
    }),
    { name: "custom-bodies-store" },
  ),
);
