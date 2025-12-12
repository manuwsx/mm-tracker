import { create } from 'zustand';

interface TrackerState {
    itemStates: Record<string, number>;
    cycleItem: (id: string, direction: number, maxStages: number) => void;
}

export const useTrackerStore = create<TrackerState>((set) => ({
    itemStates: {},

    cycleItem: (id, direction, maxStages) => set((state) => {
        const currentLevel = state.itemStates[id] || 0;
        let newLevel = currentLevel + direction;
        if (newLevel > maxStages) {
            newLevel = 0; 
        } else if (newLevel < 0) {
            newLevel = maxStages;
        }

        return {
            itemStates: {
                ...state.itemStates,
                [id]: newLevel,
            },
        };
    }),
}));
