import "../assets/css/style.css";

function RegisterComponent() {
  return (
    <>
      <main className="container">
        <header className="header">
          <nav className="nav-header">
            <a href="/">
              <img src="assets/images/logo.png" alt="" className="logo" />
            </a>
          </nav>
        </header>
        <section className="sectionlogin">
          <div className="login">
            <div className="login2">
              <div className="sublogin">
                <div>
                  <span className="sublogin1">Pendaftaran Akun</span>
                </div>
                <div>
                  <span className="dmsans">
                    Yuk, daftarkan akunmu sekarang juga!
                  </span>
                </div>
              </div>
              <div className="login3">
                <div className="login4">
                  <div className="login5">
                    <div>
                      <span className="emailpasstext">
                        Nama Lengkap<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input type="text" required className="inputemail" />
                      </div>
                    </div>
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
                        No. HP<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input type="text" required className="inputemail" />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Kata Sandi<span className="required"> *</span>
                      </span>
                      <div className="email">
                        <input type="password" required className="inputpass" />

                        <img
                          src="assets/images/eyelid.png"
                          className="eyeico"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="emailpasstext">
                        Konfirmasi Kata Sandi<span className="required">*</span>
                      </span>
                      <div className="email">
                        <input type="password" required className="inputpass" />

                        <img
                          src="assets/images/eyelid.png"
                          className="eyeico"
                        />
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
                        <button className="tombollogin">Daftar</button>
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <button className="tomboldaftar">Masuk</button>
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
                          <img
                            src="assets/images/google.png"
                            className="googleico"
                          />
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

export default RegisterComponent;
