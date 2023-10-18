const Container = ({ title, children }) => {
  return (
    <>
      <div className="app bg-white border border-red-700 p-10 m-5">
        <div className="container-title">{title}</div>
        <div className="container-content">{children}</div>
      </div>
    </>
  )
}

export default Container;