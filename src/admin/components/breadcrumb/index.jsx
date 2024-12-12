/* eslint-disable react/prop-types */
const Breadcrumb = ({ menu, title, active }) => {
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">{menu}</li>
        {title && <li className="breadcrumb-item">{title}</li>}
        <li className="breadcrumb-item active">{active}</li>
      </ol>
    </nav>
  )
}

export { Breadcrumb }
