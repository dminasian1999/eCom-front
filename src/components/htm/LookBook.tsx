import React from "react"
import { categories } from "../../utils/constants.ts"
import { Link } from "react-router-dom"

const LookBook = () => {
  return (
    <div className={""}>
      <div className="row row-cols-1 row-cols-md-2 ">
        {categories.map(c => (
          <div className="col m-0 p-0">
            <div className="card text-bg-dark m-0 p-0 border-0"
            style={{height: "300px"}}>
              <img  src={c.imageUrl} className="card-img w-100 h-100 object-fit-cover" alt="..." />
              <Link to={`/category/${c.route}`} className="card-img-overlay d-flex  justify-content-center align-items-center">
                <div className="btn fs-1">{c.title}</div>
              </Link>
            </div>
          </div>

        ))}
      </div>
      )
    </div>
  )
}

export default LookBook
