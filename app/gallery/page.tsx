import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <section className="text-gray-600 body-font mx-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">图片展示</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">《校园忆：心之引》是一幅诗意绘就的解谜冒险之旅。在校园宿舍的迷离光影中，描绘了成长、热爱和爱情的壮美篇章。</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="start.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/start.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">开始界面</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">校园忆 · 心之引</h1>
                <p className="leading-relaxed">Campus Memoirs</p>
                <p className="leading-relaxed">Unearthing the Inner Compass</p>
                <p className="leading-relaxed">开始动画结束后的首个页面</p>
                <p className="leading-relaxed">玩家可以选择 start 或 exit</p>
                <p className="leading-relaxed">也可以点击 list 查看制作人员名单</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="handwrite-letter.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/handwrite-letter.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">手写信</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">男主角的生日祝福信</h1>
                <p className="leading-relaxed">物品描述写着：</p>
                <p className="leading-relaxed">“一封破旧的信，</p>
                <p className="leading-relaxed">似乎已经被遗忘在岁月的尘埃之中。”</p>
                <p className="leading-relaxed">既推动着游戏爱情线的发展；</p>
                <p className="leading-relaxed">又包含着解开密码的重要线索。</p>

              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="bag.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/bag.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">睁眼特效与背包栏</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">背景是宿舍和八卦阵谜题</h1>
                <p className="leading-relaxed">八卦阵的图形由八个卦象组成，</p>
                <p className="leading-relaxed">每个卦象蕴含着不同的哲学意义与自然概念。</p>
                <p className="leading-relaxed">通过八卦阵，</p>
                <p className="leading-relaxed">人们试图理解宇宙的运行规律、</p>
                <p className="leading-relaxed">自然界的变化以及人生的哲学意义。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="classroom.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/classroom.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">教室场景</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">男主角的回忆</h1>
                <p className="leading-relaxed">教室的黑板上写着：</p>
                <p className="leading-relaxed">“奋斗100天，我要上华科”。</p>
                <p className="leading-relaxed">辛苦而难忘的高中生活，</p>
                <p className="leading-relaxed">是男主角的青春记忆。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="puzzle-pieces.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/puzzle-pieces.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">拼图碎片</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">在教室一旁的储物柜中</h1>
                <p className="leading-relaxed">使用在前面关卡中获得的钥匙，</p>
                <p className="leading-relaxed">玩家可以打开储物柜，</p>
                <p className="leading-relaxed">获得拼图碎片，</p>
                <p className="leading-relaxed">进入拼图谜题关卡。</p>
                <p className="leading-relaxed">拼图谜题关卡是本游戏的核心关卡。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="rock.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/rock.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">物品描述</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">花岗岩</h1>
                <p className="leading-relaxed">玩家可与背包栏中的每个物品进行交互。</p>
                <p className="leading-relaxed">物品“花岗岩”的描述：</p>
                <p className="leading-relaxed">“一块普通的石头，</p>
                <p className="leading-relaxed">颜色怪怪的，</p>
                <p className="leading-relaxed">看不出有什么特别之处。”</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="puzzle.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/puzzle.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">拼图</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">谜题之一</h1>
                <p className="leading-relaxed">爱情线的物品之一；</p>
                <p className="leading-relaxed">由 9 个拼图碎片组成</p>
                <p className="leading-relaxed">碎片上隐含着解开密码的线索。</p>
                <p className="leading-relaxed">完成拼图谜题，</p>
                <p className="leading-relaxed">是玩家推动剧情发展的必经之路。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="lover.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/lover.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">完整拼图</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">完成后的拼图</h1>
                <p className="leading-relaxed">完整的拼图，</p>
                <p className="leading-relaxed">是主角与高中前女友的旧照。</p>
                <p className="leading-relaxed">放下对过去的遗憾与留恋，</p>
                <p className="leading-relaxed">主角迎来了他的大学生活，</p>
                <p className="leading-relaxed">重新寻找人生的方向。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="aigc.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/aigc.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">AIGC</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">美术绘制</h1>
                <p className="leading-relaxed">所有素材均为原创，</p>
                <p className="leading-relaxed">不涉及任何版权问题。</p>
                <p className="leading-relaxed">应用 AIGC 热点技术，</p>
                <p className="leading-relaxed">创意细致、文案独特，</p>
                <p className="leading-relaxed">策划紧贴校园主题出发。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
            <Image
                alt="aigc2.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/aigc2.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">AIGC</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">美术绘制</h1>
                <p className="leading-relaxed">过去无法改变，</p>
                <p className="leading-relaxed">但可以珍惜现在与未来。</p>
                <p className="leading-relaxed">不要忘记自己的初心，</p>
                <p className="leading-relaxed">坚持自己的热爱，</p>
                <p className="leading-relaxed">美好的回忆已经足够。</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="end.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/end.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">结束画面</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">华科东九楼外实景拍摄</h1>
                <p className="leading-relaxed">技术亮点：</p>
                <p className="leading-relaxed">单例模式 全局访问点 状态机</p>
                <p className="leading-relaxed">解耦不同状态</p>
                <p className="leading-relaxed">简化代码的调用与管理</p>
                <p className="leading-relaxed">提高游戏封装性</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                alt="WJproductions.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={500}
                height={500}
                src="/images/WJproductions.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">LOGO</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">产品 logo 设计</h1>
                <p className="leading-relaxed">背包系统的应用</p>
                <p className="leading-relaxed">管理和组织玩家获取的物品</p>
                <p className="leading-relaxed">避免了传递实例对象的复杂性</p>
                <p className="leading-relaxed">按需查看和使用背包中的物品</p>
                <p className="leading-relaxed">使物品的管理更加简单和高效</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page