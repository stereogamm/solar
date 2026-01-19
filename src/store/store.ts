import { create } from 'zustand'

interface IUseBodiesCounterStore {
    bodies: number,
    likeBody: () => void,
    unlikeBody: () => void,
}

export const useBodiesCounterStore = create<IUseBodiesCounterStore>()((set) => ({
    bodies: 0,
    likeBody: () => set((state) => ({bodies: state.bodies + 1})),
    unlikeBody: () => set((state) => ({bodies: state.bodies - 1})),
    })
)


export const useBodies = () => useBodiesCounterStore((state) => state.bodies)
export const useLikeBody = () => useBodiesCounterStore((state) => state.likeBody)
export const useUnlikeBody = () => useBodiesCounterStore((state) =>  state.unlikeBody)




