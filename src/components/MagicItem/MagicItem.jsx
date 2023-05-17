import boots from '../../assets/z-grusheyu-2-500x500.png';
import {
  ButtonWrapper,
  Card,
  ColorSpan,
  ContentBox,
  Image,
  ImageBox,
  InfoWrapper,
  PriceText,
  SizeSpan,
  StyledLink,
  SubTitle,
  Title,
} from './MagicItem.styled';

const MagicItem = () => {
  return (
    <Card>
      <ImageBox className="ImageBox">
        <Image src={boots} alt="boots" />
      </ImageBox>

      <ContentBox className="ContentBox">
        <Title>Піца з грушею</Title>

        <InfoWrapper className="SizeWrapper">
          <SubTitle style={{ marginBottom: '6px' }}>Тісто :</SubTitle>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 8,
            }}
          >
            <SizeSpan>Тонке</SizeSpan>
            <SizeSpan>Традиційне</SizeSpan>
          </div>
        </InfoWrapper>

        <InfoWrapper className="ColorWrapper">
          <SubTitle>Розмір :</SubTitle>

          <ColorSpan>20</ColorSpan>
          <ColorSpan>30</ColorSpan>
          <ColorSpan>40</ColorSpan>
        </InfoWrapper>

        <ButtonWrapper className="StyledLink">
          <PriceText>200 грн.</PriceText>
          <StyledLink to="#">Додати</StyledLink>
        </ButtonWrapper>
      </ContentBox>
    </Card>
  );
};

export default MagicItem;
