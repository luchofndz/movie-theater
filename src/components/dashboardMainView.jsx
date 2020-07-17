import React from 'react';
import PaymentView from './paymentView' 
import { CheckCircle, Smile, ThumbsUp, Feather } from 'react-feather';
import '../styles/dashboardMainViewStyles.css';

export default function DashboardMainView() {
  return (
    <div>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#" aria-label="Product">
            <Feather color='blue' />
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
        </div>
      </nav>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light header__background-image-main" >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-bold">Donate</h1>
          <CheckCircle size={54} color='green' />
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-warning mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
          <h2 className="display-5">Taking action, changing lives.</h2>
            <p className="lead">We value all donations big and small! Every cent donated helps us to change lives and minds through #inclusivefilmmaking. Think about supporting Bus Stop Films!</p>
            <div class="btn-group">
              <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select your bus stop
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <PaymentView />   
          </div>
        </div>
        <div className="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">How your money helps</h2>
            <Smile size={54} color='green' />
            <p className="lead">We generate about 70% of our operational costs through our program fees, which students pay through their NDIS packages and undertake fundraising to produce our films. As a not-for-profit, we also rely on the kind donations we receive from our supporters, all of which are put towards supporting the education of our students. All donations are tax deductible.</p>
          </div>
        </div>
      </div>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light header__background-image-secondary" >
        <div className="col-md-5 p-lg-5 mx-auto my-5">
        </div>
      </div>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
          <ThumbsUp size={54} color='blue' />
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Cool stuff</a></li>
              <li><a className="text-muted" href="#">Random feature</a></li>
              <li><a className="text-muted" href="#">Team feature</a></li>
              <li><a className="text-muted" href="#">Stuff for developers</a></li>
              <li><a className="text-muted" href="#">Another one</a></li>
              <li><a className="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Resource</a></li>
              <li><a className="text-muted" href="#">Resource name</a></li>
              <li><a className="text-muted" href="#">Another resource</a></li>
              <li><a className="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Business</a></li>
              <li><a className="text-muted" href="#">Education</a></li>
              <li><a className="text-muted" href="#">Government</a></li>
              <li><a className="text-muted" href="#">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Privacy</a></li>
              <li><a className="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};