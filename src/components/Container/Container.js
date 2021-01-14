import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.protoType = {
  children: PropTypes.node.isRequired,
};

export default Container;
