import React from 'react'

const Landing = () => {
  
    const styles = {
      link: 'hidden md:hidden sm:hidden lg:block text-slate-500 text-center text-sm bg-[#260b3a] py-1',
        title: 'text-6xl lg:text-7xl font-bold text-white pt-12 lg:pt-40 ml-12 lg:ml-32',
        subtitle: 'text-3xl lg:text-5xl text-white mt-8 ml-12 lg:ml-32',
        buttonContainer: 'lg:hidden mx-12 flex flex-col items-center justify-center mt-8',
        desktopContainer: 'hidden md:hidden sm:hidden lg:flex mt-16 justify-around',
        buttonP: 'w-60 lg:w-80 mt-4 py-6 bg-blue-500 rounded-lg text-white tracking-wider lg:mx-20',
        buttonT: 'w-60 lg:w-80 mt-4 py-6 bg-green-500 rounded-lg text-white tracking-wider lg:mx-20',
        buttonC: 'w-60 lg:w-80 mt-4 py-6 bg-orange-500 rounded-lg text-white tracking-wider lg:mx-20',
      }
  
    return (
    <div id='/'>

<div className={styles.link}>For DEVELOPMENT website, click <a href='https://www.hannahfeehan.dev/'>here</a></div>

<div>
      <h1 className={styles.title}>Hannah Feehan</h1>
      <h2 className={styles.subtitle}>Guitarist, Composer and Teacher</h2>
      </div>

      <div className={styles.buttonContainer}>
        <a href="/#teaching"><button className={styles.buttonP}>TEACHING</button></a>
        <a href="/#composing"><button className={styles.buttonT}>COMPOSING etc.</button></a>
        <a href="/#performance"><button className={styles.buttonC}>PERFORMANCE</button></a>
      </div>

      <div className={styles.desktopContainer}>
        <a href="/#teaching"><button className={styles.buttonP}>TEACHING</button></a>
        <a href="/#composing"><button className={styles.buttonT}>COMPOSING etc.</button></a>
        <a href="/#performance"><button className={styles.buttonC}>PERFORMANCE</button></a>
      </div>

    </div>
  )
}

export default Landing