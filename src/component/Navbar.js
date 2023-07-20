import React  from "react";
export default function Navbar(){
  return (

    <>

        <header>
            <nav>
                <div className="menu">
                    <ul>
                        <li id="listmenu"><a href="/HomePage.html">HOME</a></li>
                        <li id="listmenu"><a href="/News/NewsHome.html">NEWS</a></li>
                        <li id="listmenu"><a href="/Blogs/BlogsHome.html">BLOGS</a></li>
                        <li id="listmenu"><a href="/Form/Form.html">FORMS</a></li>
                        <li id="listmenu"><a
                                href="/PalindromChecker/Palindrom.html">PALINDROME</a></li>
                    </ul>
                </div>
                <div className="reg">
                    <a href="/Form/Form.html">REGISTER</a>
                </div>
            </nav>
        </header>

    </>
  );
}