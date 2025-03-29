import { FC, memo } from 'react';

import DropdownMenu from '../../widgets/DropdownMenu/DropdownMenu';
import { NewsModel } from '../../utils/types';

import s from './styles.module.css';

interface NewsBlockProps {
  news: NewsModel;
}

const NewsBlock: FC<NewsBlockProps> = ({ news }) => {
  return (
    <div className={s.newsOneBlock}>
      <div className={s.newsBlockHeader}>
        <p className={s.date}>{news.date}</p>
        <DropdownMenu news={news} />
      </div>
      <h2>{news.title}</h2>
      <p className={s.text}>{news.text}</p>
    </div>
  );
};

export default memo(NewsBlock);
