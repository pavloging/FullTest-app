// Define a type for your state
interface State {
    counter?: {
        value: number;
    };
}

// Use the State type for the state parameter
export const getCounterValue = (state: State) => state?.counter?.value || 0;
