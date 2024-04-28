import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  interface HomeEntity {
    id: number;
    text: string;
  }

  const onClick = () => {
    const entity: HomeEntity = {
      id: 1,
      text: "test",
    };
    navigate("/edit", { state: entity });
  };

  return (
    <div>
      <div>ホーム画面</div>
      <CustomButton width="100px" onClick={onClick}>
        編集
      </CustomButton>
    </div>
  );
};

export default HomePage;