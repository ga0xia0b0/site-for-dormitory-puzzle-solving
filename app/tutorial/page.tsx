import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen py-6 bg-zinc-200">
        <div className='bg-zinc-100 py-10 px-60 shadow-lg'>
          <article className="prose lg:prose-lg">
            <h2 className='text-center'>使用说明</h2>
            <p>在《校园忆：心之引》中，你将被引领进入一幅诗意绽放的校园画卷，感受成长的喜悦和迷茫的回响。揭示男主角的命运，同时也会探寻自己内心的指南针，指引你通向心灵的深处，寻找生命的奇迹。踏上这场诗意之旅，解开心灵的迷宫，去寻找你真正的归属和力量吧。</p>
            <hr/>
            <h3>获取</h3>
            <ul><li>点击 &quot;立即下载&quot; 按钮，等待下载完成（约30sec）</li><li>解压下载得到的压缩包</li></ul>
            <h3>开始</h3>
            <h5>打开解压后的文件夹</h5>
            <p>  
              <Image
                alt="folder.png"
                width={500}
                height={500}
                src="/images/folder.png"
              />
            </p>
            <h5>运行“宿舍之谜1.1.exe”</h5>
            <h5>启动界面</h5>
            <p>
              <Image
                alt="start.png"
                width={500}
                height={500}
                src="/images/start.png"
              />
            </p>
            <h5>点击“start”</h5>
            <h5>场景一：宿舍</h5>
            <p>
              <Image
                alt="bag.png"
                width={500}
                height={500}
                src="/images/bag.png"
              />
            </p>
            <h5>收集物品，进入场景二：教室</h5>
            <p>
              <Image
                alt="classroom.png"
                width={500}
                height={500}
                src="/images/classroom.png"
              />
            </p>
            <h5>进入拼图界面</h5>
            <p>
              <Image
                alt="puzzle.png"
                width={500}
                height={500}
                src="/images/puzzle.png"
              />
            </p>
            <h5>完成拼图，进入八卦阵界面</h5>
            <p>
              <Image
                alt="baguazhen.png"
                width={500}
                height={500}
                src="/images/baguazhen.png"
              />
            </p>
            <h5>继续根据线索提示，完成游戏</h5>
            <h3>操控</h3>
            <h5>主界面</h5>
            <ul><li>鼠标点选开始游戏/退出游戏 </li></ul>
            <h5>场景界面</h5>
            <ul><li>鼠标点击收集物品到背包中  </li></ul>
            <h5>背包栏</h5>
            <ul><li>鼠标点击显示物品介绍 </li></ul>
            <h5>拼图/八卦阵界面</h5>
            <ul><li>鼠标拖动物件完成移动/放置物品
            </li></ul>
          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page