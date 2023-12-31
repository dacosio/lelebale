import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type FilterProps = {
  package: string;
};

const initialState: FilterProps = {
  package: "package oh",
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    storePackage: (state, action) => {
      state.package = action.payload;
    },
  },
});

export const { storePackage } = packageSlice.actions;

export default packageSlice.reducer;

export const selectPackage = (state: RootState) => state.package.package;

/*
Usage: 
import { selectPackage } from "./filterSlice"

const dispatch = useAppDispatch();
dispatch(storePackage('package a);

const package = useAppSelector(selectPackage);

*/
