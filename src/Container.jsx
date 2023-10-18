const Container = ({children}) => {
  return (
    <>
      <div className="app bg-white border border-red-700 p-10 m-5">
        {children}
      </div>
    </>
  )
}

export default Container;
