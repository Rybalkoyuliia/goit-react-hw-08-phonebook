import { createSlice } from '@reduxjs/toolkit';
import { addDataThunk, deleteDataThunk, fetchDataThunk } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload.toSorted((a, b) =>
          a.name.localeCompare(b.name)
        );
        state.contacts.isLoading = false;
      })
      .addCase(fetchDataThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteDataThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addDataThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      });
  },
  selectors: {
    selectContacts: state => state.contacts.items,
    filteredContacts: state => state.filter,
    selectIsLoading: state => state.contacts.isLoading,
    selectIsError: state => state.contacts.error,
  },
});

export const phonebookReducer = slice.reducer;
export const { filterContacts } = slice.actions;
export const {
  selectContacts,
  filteredContacts,
  selectIsLoading,
  selectIsError,
} = slice.selectors;
