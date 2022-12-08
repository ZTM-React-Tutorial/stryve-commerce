import { useNavigate } from "react-router-dom";
import Directory from "../directory/directory.component";
// import "./directory-item.styles.scss";
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = (props) => {
  const { imageUrl, title, route } = props;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
