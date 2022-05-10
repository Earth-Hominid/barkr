import { NotFoundHeading, NotFoundINS, NotFoundParagraph } from './Styles';

const NotFoundPage = () => {
  return (
    <>
      <NotFoundHeading>
        <b>404.</b> <NotFoundINS>Not Found</NotFoundINS>
      </NotFoundHeading>
      <NotFoundParagraph>
        It appears the page you are looking for is not on this server.
        <NotFoundINS>Click the logo to navigate to our homepage.</NotFoundINS>
      </NotFoundParagraph>
    </>
  );
};

export default NotFoundPage;
