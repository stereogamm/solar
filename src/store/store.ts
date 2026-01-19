import { create, type StateCreator } from 'zustand'
interface IInintialState {
     bodies: number,
}

interface IActions {
    likeBody: () => void,
    unlikeBody: () => void,
}

interface IUseBodiesCounterStore extends IInintialState, IActions{}

const initialState : IInintialState = {
     bodies: 0
}

const BodiesCounterStore : StateCreator<IUseBodiesCounterStore>= ((set) => ({
   ...initialState,
    likeBody: () => set((state) => ({bodies: state.bodies + 1})),
    unlikeBody: () => set((state) => ({bodies: state.bodies - 1})),
    })
)

const useBodiesCounterStore = create<IUseBodiesCounterStore>()(BodiesCounterStore)


//selectors
export const useBodies = () => useBodiesCounterStore((state) => state.bodies)
export const useLikeBody = () => useBodiesCounterStore.getState().likeBody
export const useUnlikeBody = () => useBodiesCounterStore.getState().unlikeBody




