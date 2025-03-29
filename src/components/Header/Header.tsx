import { FC } from 'react';

import { imgAdress } from '../../utils/constants';

import s from './styles.module.css';

const Header: FC = () => {
  return (
    <div className={s.header}>
      <img className={s.img} src={imgAdress} />
    </div>
  );
};

export default Header;
