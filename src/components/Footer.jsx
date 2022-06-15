
function Footer() {
  return (
    <footer>
      <div className="hidden md:footer py-10 bg-base-100 px-8 md:px-20 border-t border-primary text-base-content">
        <div>
          <span className="footer-title mono">Services</span>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title mono">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title mono">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title mono">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none mono">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer items-center px-8 md:px-20 py-4 bg-base-100 text-primary">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer