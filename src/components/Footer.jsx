
function Footer() {
  return (
    <footer>
      <div class="hidden md:footer py-10 bg-base-100 px-8 md:px-20 border-t border-primary text-base-content">
        <div>
          <span class="footer-title mono">Services</span>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title mono">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
        </div>
        <div>
          <span class="footer-title mono">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span class="footer-title mono">Newsletter</span>
          <div class="form-control w-80">
            <label class="label">
              <span class="label-text">Enter your email address</span>
            </label>
            <div class="relative">
              <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
              <button class="btn btn-primary absolute top-0 right-0 rounded-l-none mono">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer items-center px-8 md:px-20 py-4 bg-base-100 text-primary">
        <div class="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer