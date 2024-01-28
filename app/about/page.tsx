import React from 'react'

const page = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-6 bg-zinc-200">
        <div className='bg-zinc-100 py-10 px-60 shadow-lg'>
          <article className="prose lg:prose-lg">
            <h2 className='text-center'>关于我们</h2>
            <hr/>
            <h6>团队成员</h6>
            <ul><li>朱芸</li><li>张维嘉</li><li>高小博</li></ul>
            <h6>开发环境</h6>
            <ul><li>Unity 2020.3.30f1c1</li></ul>
            <h6>关键技术</h6>
            <ul><li>C#脚本实现的游戏流程控制，状态机功能实现和转移</li><li>原创原画贴图，AI美术生成</li><li>背包系统：物品存储，进度关联属性机制</li><li>Unity Shader特效制作</li><li>设计模式</li><li>全流程Git版本控制</li></ul>
            <h3>联系我们</h3>
            <h5>gitee仓库：</h5>
            <blockquote><p>https://gitee.com/zhuyunCynthia/dormitory-puzzle-solving</p></blockquote>
          </article>
        </div>
      </div>
    </>
  )
}

export default page