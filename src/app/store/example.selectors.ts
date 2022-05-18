import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./example.reducer"

export namespace ExampleSelectors {
    export const state = createFeatureSelector<State>("example");

    export const count = createSelector(state, (state) => state.count);

    export const message = createSelector(state, (state) => state.message);

    export const messageAndCount = createSelector(state, (state) => {
        return state.message ? state.message + state.count : state.count;
    });

    export const giveMealData = createSelector(state, (state) => {
        return state.data;
    });

    export const dataLoading = createSelector(
        state, 
        (state) => state.dataLoading);

}
