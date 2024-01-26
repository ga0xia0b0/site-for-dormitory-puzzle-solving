import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <div className="shadow-xl sticky bg-base-100 top-0 navbar z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">宿舍之谜 Dormitory Puzzle Solving</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/'>首页</Link></li>
          <li><Link href='/#target'>详情</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href='/comments'>反馈{'->'}</Link>
      </div>
    </div>
  )
}

export default Header