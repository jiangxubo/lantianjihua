import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/scss';
import './style.scss'
import 'swiper/css/autoplay'
import img_a from '@/components/img/WX20220813-130412.png'
import img_b from '@/components/img/WX20220813-130936.png'
import gonggao from '@/components/img/gonggao.png'
import tupain from '@/components/img/c5beb9bc01e0f3a01b108d05610a7957.png'

const Index = () => {
  return (
    <div>
      <div className='lunbotu'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ autoplay: { delay: 500 } }}
        >
          <SwiperSlide><div className='lunbotu-limian'><img src={img_a} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className='lunbotu-limian'><img src={img_b} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className='lunbotu-limian'><img src={img_a} alt="" /></div></SwiperSlide>
          <SwiperSlide><div className='lunbotu-limian'><img src={img_b} alt="" /></div></SwiperSlide>
        </Swiper>
      </div>
      <div className='gonggao'>
        <div><img src={gonggao} alt="" /></div>
        <div>公告</div>
        <div><div className='box'><p class="animate">滚动播放消息，持续1分钟，如果连续，则及时更新最新消息。</p></div></div>
      </div>
      <div className='biaoti'>
        <div></div>
        <div>竞拍专区</div>
      </div>
      <div className='changhe'>
        <div className='num'>
          <div><img src={tupain} alt="" /></div>
          <div>08:00-09:00</div>
          <div>上午长</div>
          <div>已结束</div>
        </div>
        <div className='num'>
          <div><img src={tupain} alt="" /></div>
          <div>08:00-09:00</div>
          <div>上午长</div>
          <div>已结束</div>
        </div>
        
      </div>
      <div className='biaoti'>
        <div></div>
        <div>推荐功能</div>
      </div>
      <div className='fangkuai'>
       <div>我的卖单</div>
       <div>我的买单</div>
       <div>积分互转</div>
       <div>互转明细</div>
      </div>
    </div>
  );
}

export default Index;
