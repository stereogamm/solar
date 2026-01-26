import { create, type StateCreator } from 'zustand'
import { createJSONStorage, persist, devtools } from "zustand/middleware"

interface IInintialState {
     bodies: number,
}

interface IActions {
    likeBody: () => void,
    unlikeBody: () => void,
}

interface IUseBodiesCounterStore extends IInintialState, IActions{}

const initialState : IInintialState = {
     bodies: 0,
}

const BodiesCounterStore : StateCreator<IUseBodiesCounterStore, 
[['zustand/devtools', never],
 ['zustand/persist', unknown]]
> = ((set) => ({
   ...initialState,
    likeBody: () => set((state) => ({bodies: state.bodies + 1}), false, "likeBody"),
    unlikeBody: () => set((state) => ({bodies: state.bodies - 1}),  false, "unlikeBody"),
    })
)

const useBodiesCounterStore = create<IUseBodiesCounterStore>()(devtools(persist(BodiesCounterStore,  {
    name: "bodies-storage",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({bodies: state.bodies}),
})))


//selectors
export const useBodies = () => useBodiesCounterStore((state) => state.bodies)
export const useLikeBody = () => useBodiesCounterStore.getState().likeBody
export const useUnlikeBody = () => useBodiesCounterStore.getState().unlikeBody




