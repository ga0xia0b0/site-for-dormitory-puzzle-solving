import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Download from './components/Download'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <Header />
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/end.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="my-title mb-5 text-6xl font-bold">校园忆 · 心之引</h1>
              <h2 className="mb-5 text-2xl font-bold">Campus Memoirs<br></br>Unearthing the Inner Compass</h2>
              <p className="mb-5"></p>
              <Download href='https://files.catbox.moe/5pf46r.zip'/>
            </div>
          </div>
      </div>
      <div id='target' className='pl-32 py-5 flex'>
        <div className="h-full mt-8 card w-96 bg-base-100 shadow-xl">
          <figure><Image src="/images/lover.png" alt="img" width={500} height={500}/></figure>
          <div className=" bg-slate-700 card-body">
            <h2 className=" text-slate-100 card-title">校园忆 · 心之引</h2>
            <p className=' text-slate-300'>这是一个有关校园回忆的游戏。</p>
            <p className=' text-slate-300'>男主角是一个被 ddl 和考试所包围的情绪低落烦躁的华科大三男生，他在疯狂翻看计算机组成原理书的时候不知不觉进入了里世界：</p>
            <p className=' text-slate-300'>他先后穿越到了里宿舍与高中教室，在志向线与爱情线的交替贯穿下，不断探求，最终找寻到了初心、也从曾经的经历中获得了释怀……</p>
            <p className=' text-slate-300'>在《校园忆：心之引》中，你将被引领进入一幅诗意绽放的校园画卷，感受成长的喜悦和迷茫的回响。揭示男主角的命运，同时也会探寻自己内心的指南针，指引你通向心灵的深处，寻找生命的奇迹。</p>
          </div>
        </div>
        <div>
          <Card
            imgSrc='/images/dormitory.png'
            title='游戏介绍'
            desc='《校园忆：心之引》是一幅诗意绘就的解谜冒险之旅。在校园宿舍的迷离光影中，描绘了成长、热爱和爱情的壮美篇章。'
            href='/introduction'
          />
          <Card
            imgSrc='/images/handwrite-letter.png'
            title='图片展示'
            desc='展示游戏内容截图，包括场景、物品等。'
            href='/gallery'
          />
        </div>
        <div>
          <Card
            imgSrc='/images/notebook.png'
            title='使用说明'
            desc='踏上《校园忆：心之引》这场诗意之旅，解开心灵的迷宫，去寻找你真正的归属和力量吧。'
            href='/tutorial'
          />
          <Card
            imgSrc='/images/about.png'
            title='关于我们'
            desc='小组成员、联系方式'
            href='/about'
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page