import { FC } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import {
  createNews,
  setIsUpdate,
  setText,
  setTitle,
  updateNews,
} from '../../store/news/reducer';
import {
  newsIdSelector,
  newsIsUpdateSelector,
  newsTextSelector,
  newsTitleSelector,
} from '../../store/news/selectors';
import { message } from '../../utils/functions';

import s from './styles.module.css';

const CreateForm: FC = () => {
  const dispatch = useDispatch();

  const title = useSelector(newsTitleSelector);
  const text = useSelector(newsTextSelector);
  const id = useSelector(newsIdSelector);
  const isUpdate = useSelector(newsIsUpdateSelector);

  const onCreateOrUpdateNews = () => {
    if (!title) {
      return message({
        type: 'error',
        title: 'Заполните заголовок новости',
      });
    }
    if (!text) {
      return message({
        type: 'error',
        title: 'Заполните текст новости',
      });
    }
    if (isUpdate) {
      dispatch(
        updateNews({
          id,
          title,
          text,
        })
      );
    } else {
      dispatch(
        createNews({
          id: Date.now(),
          title,
          text,
          date: format(new Date(), 'dd.MM.yyyy HH:mm'),
        })
      );
    }
    dispatch(setTitle(''));
    dispatch(setText(''));
    dispatch(setIsUpdate(false));
    message({ title: 'Новость опубликованна' });
  };

  const onCancel = () => {
    dispatch(setIsUpdate(false));
    dispatch(setTitle(''));
    dispatch(setText(''));
  };

  return (
    <div className={s.form}>
      <Input
        placeholder='Заголовок новости'
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
      <TextArea
        autoSize={{ minRows: 3, maxRows: 3 }}
        placeholder='Текст новости'
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <div className={s.buttonsWrapper}>
        {isUpdate && (
          <Button
            onClick={onCancel}
            className={s.button}
            type='primary'
            color='danger'
          >
            Отмена
          </Button>
        )}
        <Button
          onClick={onCreateOrUpdateNews}
          className={s.button}
          type='primary'
        >
          {isUpdate ? 'Редактировать' : 'Опубликовать'}
        </Button>
      </div>
    </div>
  );
};

export default CreateForm;
