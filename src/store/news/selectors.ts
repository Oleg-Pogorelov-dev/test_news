import { RootState } from '../../store/store';

export const newsSelector = (state: RootState) =>
  state.persistedReducer.news.newsList;

export const newsTitleSelector = (state: RootState) =>
  state.persistedReducer.news.titleBuffer;

export const newsTextSelector = (state: RootState) =>
  state.persistedReducer.news.textBuffer;

export const newsIdSelector = (state: RootState) =>
  state.persistedReducer.news.idBuffer;

export const newsIsUpdateSelector = (state: RootState) =>
  state.persistedReducer.news.isUpdate;
