import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）

export default function Slider  ()  {
  return (
    <div>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, //自動再生の間隔を3秒に設定
        }}
      >
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2016/02/da0b1b2d878c3e54d89f843801d4714b.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2017/02/adtDSC_0944.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2016/02/4ab096d074c35f99ad05687eccf70c28.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2016/02/da0b1b2d878c3e54d89f843801d4714b.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2017/02/adtDSC_0944.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://free-materials.com/adm/wp-content/uploads/2016/02/4ab096d074c35f99ad05687eccf70c28.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};