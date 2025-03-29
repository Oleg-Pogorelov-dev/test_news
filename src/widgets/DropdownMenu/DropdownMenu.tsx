import { FC, useCallback } from 'react';
import { Dropdown } from 'antd';
import { useDispatch } from 'react-redux';

import {
  setId,
  setIsUpdate,
  setText,
  setTitle,
  removeNews,
} from '../../store/news/reducer';
import { NewsModel } from '../../utils/types';
import { message } from '../../utils/functions';

import s from './styles.module.css';

interface DropdownMenuProps {
  news: NewsModel;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ news }) => {
  const dispatch = useDispatch();

  const onClickUpdate = useCallback(() => {
    dispatch(setIsUpdate(true));
    dispatch(setTitle(news.title));
    dispatch(setText(news.text));
    dispatch(setId(news.id));
  }, []);

  const onClickRemove = useCallback(() => {
    dispatch(removeNews(news.id));
    message({ title: `Новость "${news.title}" удалена` });
  }, []);

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: '1',
            label: <div onClick={onClickUpdate}>Редактировать</div>,
          },
          {
            key: '2',
            label: (
              <div onClick={onClickRemove} className={s.deleteButton}>
                Удалить
              </div>
            ),
          },
        ],
      }}
      placement='bottom'
    >
      <div className={s.dots}>...</div>
    </Dropdown>
  );
};

export default DropdownMenu;
