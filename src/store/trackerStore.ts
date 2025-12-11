import { create } from 'zustand';

interface TrackerState {
    obtainedItems: Record<string, boolean>;
    toggleItem: (id: string) => void;
}

export const useTrackerStore = create<TrackerState>((set) => ({
    obtainedItems: {},

    toggleItem: (id) => set((state) => ({
        obtainedItems: {
            ...state.obtainedItems,
            [id]: !state.obtainedItems[id],
        },
    })),
}));