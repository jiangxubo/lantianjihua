import React, { useEffect, useState } from 'react';
import './style.scss'
import icon from '@/components/img/home.png'

const Index = () => {
  return (

    <div className='lantian-my'>
      <div className='top1'>我的</div>

      <div className='top2'>
        <div></div>
        <div>
          <div>123213</div>
          <div>123213</div>
          <div>3213213</div>
        </div>
        <div>
          <div>游客</div>
        </div>
      </div>

      <div className='top3'>
        <div className='top3-q' style={{border:'none'}}>
          <span>0</span>
          <span>奖金</span>
        </div>
        <div className='top3-q'>
          <span>0</span>
          <span>购物卷</span>
        </div>
        <div className='top3-q'>
          <span>0</span>
          <span>交易积分</span>
        </div>
        <div className='top3-q'>
          <span>0</span>
          <span>累计收益</span>
        </div>
      </div>

      <div className='top4'>
        <div>我的订单</div>
        <div>查看全部</div>
      </div>
      <div className='top5'>
        <div className='top5-q'>
          <div><img src={icon} alt="" /></div>
          <div>全部</div>
        </div>
        <div className='top5-q'>
        <div><img src={icon} alt="" /></div>

          <div>待发货</div>
        </div>

        <div className='top5-q'>
        <div><img src={icon} alt="" /></div>

          <div>待发货</div>
        </div>
        <div className='top5-q'>
        <div><img src={icon} alt="" /></div>

          <div>已完成</div>
        </div>
      </div>
    <div style={{height:20}}></div>
    <div className='top6'>
      <div className='top6-q'>
          <div><img src={icon} alt="" /></div>
          <div>实名认证</div>
      </div>
      <div className='top6-w'>》</div>
    </div>

    <div className='top6'>
      <div className='top6-q'>
          <div><img src={icon} alt="" /></div>
          <div>实名认证</div>
      </div>
      <div className='top6-w'>》</div>
    </div>
    <div className='top6'>
      <div className='top6-q'>
          <div><img src={icon} alt="" /></div>
          <div>实名认证</div>
      </div>
      <div className='top6-w'>》</div>
    </div>












    </div>



  );
}

export default Index;
