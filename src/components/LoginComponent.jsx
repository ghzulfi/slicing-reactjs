import "../styles/style.css";

function LoginComponent() {
  return (
    <>
      <main className="container">
        <header className="header">
          <nav className="nav-header">
            <a href="/">
              <img src="/images/logo.png" alt="" className="logo" />
            </a>
          </nav>
        </header>
        <section className="sectionlogin">
          <div className="login">
            <div className="login2">
              <div className="sublogin">
                <div>
                  <span className="sublogin1">Masuk ke Akun</span>
                </div>
                <div>
                  <span className="dmsans">
                    Yuk, lanjutin belajarmu di videobelajar.
                  </span>
                </div>
              </div>
              <div className="login3">
                <div className="login4">
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        E-Mail<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input type="email" required className="inputemail" />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Kata Sandi<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input type="password" required className="inputpass" />

                        <img src="/images/eyelid.png" className="eyeico" />
                      </div>
                    </div>
                    <div className="forgot1">
                      <a href="#" className="forgot">
                        Lupa Password?
                      </a>
                    </div>
                  </div>
                  <div className="masuk-daftar">
                    <div>
                      <a href="/beranda">
                        <button className="tombollogin">Masuk</button>
                      </a>
                    </div>
                    <div>
                      <a href="/register">
                        <button className="tomboldaftar">Daftar</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pemisah">
                  <div className="garisatau"></div>
                  <span className="textatau">atau</span>
                </div>
                <div>
                  <div>
                    <a href="#">
                      <button className="tombolgoogle">
                        <div>
                          <img src="/images/google.png" className="googleico" />
                        </div>
                        <div>Masuk dengan Google</div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginComponent;
