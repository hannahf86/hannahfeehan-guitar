

function App() {

  const styles = {
    title: 'text-6xl font-bold text-white mt-24 ml-12',
    subtitle: 'text-3xl text-white mt-8 ml-12',
    buttonContainer: 'mx-12 flex flex-col items-center justify-center mt-8',
    buttonP: 'w-60 mt-4 py-6 bg-blue-500 rounded-lg text-white tracking-wider',
    buttonT: 'w-60 mt-4 py-6 bg-green-500 rounded-lg text-white tracking-wider',
    buttonC: 'w-60 mt-4 py-6 bg-orange-500 rounded-lg text-white tracking-wider',
  }

  return (
    <>
    <div>
      <h1 className={styles.title}>Hannah Feehan</h1>
      <h2 className={styles.subtitle}>Guitarist, Composer and Teacher</h2>
      </div>

      <div className={styles.buttonContainer}>
        <a href="#"><button className={styles.buttonP}>TEACHING</button></a>
        <a href="#"><button className={styles.buttonT}>COMPOSING</button></a>
        <a href="#"><button className={styles.buttonC}>PERFORMANCE</button></a>
      </div>
    </>
  )
}

export default App
