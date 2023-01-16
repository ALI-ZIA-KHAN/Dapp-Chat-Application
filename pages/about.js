import React from 'react'
 const about = () => {
  return (
    <>

    <div className='container'>
      <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center'>
          <div class="card" style={{width:"18rem"}}>
  <img src="https://cdn-icons-png.flaticon.com/512/2504/2504165.png" class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Mobile Friendly</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
          </div>
          <div className='col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center'>
          <div className="card" style={{width: "18rem"}}>
<img src='https://cdn-icons-png.flaticon.com/512/6553/6553508.png' className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">Fast Connection</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
          </div>
          <div className='col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center'>
          <div className="card" style={{width: "18rem"}}>
  <img src="https://cdn-icons-png.flaticon.com/512/6230/6230874.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Language Friendly</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
          </div>

      </div>
    </div>
    </>
  )
}

export default about;