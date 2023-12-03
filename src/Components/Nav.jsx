import React from 'react'

// ICONS
import { HiHome, HiOutlineNewspaper , HiBookOpen , HiMail } from 'react-icons/hi'

const Nav = () => {

    const styles = {
        mobileContainer: 'lg:hidden',
        background: ' flex justify-center justify-evenly items-center fixed bottom-0 left-0 z-50 w-full bg-[#260b3a] z-10',
        icon: 'text-neutral-200 active:text-[#F97316] active:scale-110 my-6 mx-6',
    }

    const desktopStyles = {
        desktopContainer: 'hidden md:hidden sm:hidden lg:block',
        link: 'text-slate-500 text-center text-sm bg-[#260b3a] py-1',
        background: 'fixed w-full flex flex-row justify-evenly bg-[#260b3a] z-10',
        icons: 'flex flex-row content-center text-neutral-200 my-12',
        text: 'flex items-center text-xl ml-3 tracking-widest hover:text-[#F97316] hover:scale-110 cursor-pointer',
        toggle: 'justify-self-end self-end'
    }

    return (
        <>
            {/* MOBILE & TABLET NAV */}
            <div id='mobile-nav' className={styles.mobileContainer}>
                <div className={styles.background}>
                    <a href='/'><HiHome size={28} className={styles.icon} /></a>
                    <a href='/#news'><HiOutlineNewspaper size={25} className={styles.icon} /></a>
                    <a href='/#about'><HiBookOpen  size={28} className={styles.icon} /></a>
                    <a href='/#contact'><HiMail size={28} className={styles.icon} /></a>
                </div>
            </div>

            {/* DESKTOP NAV*/}
            <div className={desktopStyles.desktopContainer}>
            <div className={desktopStyles.link}>For DEVELOPMENT website, click <a href='https://www.hannahfeehan.dev/'>here</a></div>
                <div id='desktop-nav' className={desktopStyles.background}>
                    <div className={desktopStyles.icons}>
                        <a href='/'><h2 className={desktopStyles.text}><div className='mr-3'><HiHome /></div>HOME</h2></a>
                    </div>

                    <div className={desktopStyles.icons}>
                        <a href='/#news'> <h2 className={desktopStyles.text}><div className='mr-3'><HiOutlineNewspaper /></div>NEWS</h2></a>
                    </div>

                    <div className={desktopStyles.icons}>
                        <a href='/#about'><h2 className={desktopStyles.text}><div className='mr-3'><HiBookOpen  /></div>ABOUT</h2></a>
                    </div>

                    <div className={desktopStyles.icons}>
                        <a href='/#contact'> <h2 className={desktopStyles.text}><div className='mr-3'><HiMail /></div>CONTACT</h2></a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Nav