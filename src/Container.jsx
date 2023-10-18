const Container = ({children}) => {
  return (
    <>
      <div className="app bg-white-400 border border-red-700 p-10 m-5">
        {children}
      </div>
    </>
  )
}

export default Container;