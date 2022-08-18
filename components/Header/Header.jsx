import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const nav = [
    {
      slug: 'thong-ke',
      name: 'Thống Kê',
      link: '/thong-ke',
    },
    {
      slug: 'khoa-kham',
      name: 'khoa',
      link: '/khoa-kham',
      list: [
        {
          name: 'Tim Mạch',
          link: '/tim-mach',
        },
        {
          name: 'Chấn Thương',
          link: '/chan-thuong',
        },
        {
          name: 'Phục hồi chức năng',
          link: '/phuc hoi chuc nang',
        },
        {
          name: 'Phục hồi chức năng',
          link: '/phuc hoi chuc nang',
        },
        {
          name: 'Phục hồi chức năng',
          link: '/phuc hoi chuc nang',
        },
      ],
    },
    {
      name: 'Blog',
      link: '/blog',
      slug: 'blog',
    },
    {
      name: 'Liên Hệ',
      link: '/lien-he',
      slug: 'lien-he',
    },
    {
      name: 'Đặt lịch',
      link: '/toc',
      slug: 'toc',
    },
    {
      name: 'Pe',
      link: '/Pe',
      slug: 'Pe',
    },
  ];
  const [isMenu, setIsMenu] = useState(false);
  // const [setting, setSetting] = useState(false);
  // const context = useContext(ThemeContext);
  // const [activeClick, setActiveClick] = useState(1);
  const [activeNav, setActiveNav] = useState();
  const handleClick = (index) => {
    setActiveClick(index);
  };

  // useEffect(() => {
  //   if (activeClick === 1) {
  //     context.setColorlight(context.themeRed);
  //   } else if (activeClick === 2) {
  //     context.setColorlight(context.themeGreen);
  //   } else if (activeClick === 3) {
  //     context.setColordark(context.themeBlue);
  //   } else if (activeClick === 4) {
  //     context.setColorlight(context.themeOrange);
  //   }
  // }, [activeClick]);

  const handleShowNavItem = (index) => {
    if (activeNav === index) {
      setActiveNav();
    } else {
      setActiveNav(index);
    }
  };
  const handleClose = () => setIsMenu(false);
  return (
    <>
      <div
        className={clsx(styles.NavMain, {
          [styles.show]: isMenu === true,
        })}
      >
        <ul className={styles.NavUl}>
          {nav?.map((data, index) => (
            <li className={styles.NavLi} key={index}>
              <span className={styles.NavName}>
                <Link href={data.link}>
                  <span
                    onClick={handleClose}
                    className={clsx(styles.items, {
                      [styles.active]:
                        router.asPath == `${data.link}` ||
                        router.route == `${data.link}`,
                    })}
                  >
                    {data.name}
                  </span>
                </Link>
                {data.list && (
                  <span
                    onClick={() => handleShowNavItem(index)}
                    className={clsx(styles.rightIcon, {
                      [styles.active]:
                        router.asPath == `${data.link}` ||
                        router.route == `${data.link}`,
                    })}
                  >
                    <AiFillCaretDown className={clsx(styles.icon)} />
                  </span>
                )}
              </span>
              {data.list && (
                <ul
                  className={clsx(styles.navsItem)}
                  style={{
                    height:
                      activeNav === index ? `${data.list.length * 40}px` : 0,
                  }}
                >
                  {nav[index].list.map((item, i) => (
                    <li
                      key={i}
                      onClick={handleClose}
                      className={clsx(styles.navsItemLi)}
                    >
                      <Link href={item.link}>
                        <h5>{item.name}</h5>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.close} onClick={handleClose}>
          <IoMdClose />
        </div>
      </div>
      <div className={styles.btnWrapper} onClick={() => setIsMenu(true)}>
        <div className={styles.btnNav}>
          <AiOutlineMenu style={{ width: '30px', top: '10px' }} />
        </div>
      </div>
    </>
  );
}
