import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RootState } from '../store/store';

interface Props {
  children: JSX.Element;
}

const IsAuth = (props: Props) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return isAuthenticated ? props.children : <Redirect to="/signin" />;
};

export default IsAuth;
