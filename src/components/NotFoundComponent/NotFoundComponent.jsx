// styles
import {
  ErrorImage,
  ErrorTitle,
  ErrorWrapper,
  StyledLink,
} from './NotFoundComponent.style';

// images
import notFoundImage from '../../assets/notFound.jpg';

const NotFoundComponent = () => {
  return (
    <ErrorWrapper>
      <ErrorImage src={notFoundImage} alt="error bad request" />
      <ErrorTitle>Нічого не було знайдено</ErrorTitle>

      <StyledLink to="/">На головну</StyledLink>
    </ErrorWrapper>
  );
};

export default NotFoundComponent;
