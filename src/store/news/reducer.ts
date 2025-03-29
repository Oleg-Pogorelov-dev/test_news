import { createSlice } from '@reduxjs/toolkit';

import { NewsModel } from '../../utils/types';

interface News {
  newsList: NewsModel[];
  idBuffer: string;
  titleBuffer: string;
  textBuffer: string;
  isUpdate: boolean;
}

const initialState: News = {
  newsList: [],
  idBuffer: '',
  titleBuffer: '',
  textBuffer: '',
  isUpdate: false,
};

export const news = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setTitle(state, { payload }) {
      state.titleBuffer = payload;
    },
    setText(state, { payload }) {
      state.textBuffer = payload;
    },
    setIsUpdate(state, { payload }) {
      state.isUpdate = payload;
    },
    setId(state, { payload }) {
      state.idBuffer = payload;
    },
    createNews(state, { payload }) {
      const { id, title, text, date } = payload;

      state.newsList = [{ id, title, text, date }, ...state.newsList];
    },
    updateNews(state, { payload }) {
      const { id, title, text } = payload;

      const newList = [...state.newsList];

      state.newsList = newList.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.text = text;
        }

        return item;
      });
    },
    removeNews(state, { payload }) {
      const newList = [...state.newsList];

      state.newsList = newList.filter((item) => item.id !== payload);
    },
  },
});

export const {
  createNews,
  updateNews,
  setTitle,
  setText,
  setIsUpdate,
  setId,
  removeNews,
} = news.actions;
export default news.reducer;
