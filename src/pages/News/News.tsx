import { FC, memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { newsSelector } from '../../store/news/selectors';
import { ArrowButtonUp } from '../../utils/constants';
import NewsBlock from '../../widgets/NewsBlock/NewsBlock';

import s from './styles.module.css';

const News: FC = () => {
  const [isViewArrowUp, setIsViewArrowUp] = useState(false);

  const newsList = useSelector(newsSelector);

  const refNews = useRef(null);

  const onClickTop = () => {
    refNews.current.scrollTop = 0;
  };

  const handleOnScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (!!e.currentTarget.scrollTop) {
      setIsViewArrowUp(true);
    }
    if (!e.currentTarget.scrollTop && isViewArrowUp) {
      setIsViewArrowUp(false);
    }
  };

  return (
    <div className={s.newsBlock} ref={refNews} onScroll={handleOnScroll}>
      {newsList.map((news) => {
        return <NewsBlock key={news.id} news={news} />;
      })}
      {isViewArrowUp && (
        <div className={s.arrowButton} onClick={onClickTop}>
          <img width={50} height={50} src={ArrowButtonUp} />
        </div>
      )}
    </div>
  );
};

export default memo(News);
