import { Icon } from '@iconify/react'
import logoCircle from '../../../assets/logoCircle.png'

import './styles.css'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="col-footer">
          <img src={logoCircle} alt="Logomarca Canada Padaria e Comedoria" />
        </div>
        <div className="col-footer">
          <h1>Contato</h1>

          <a
            href="https://instagram.com/panificadoracanada"
            target="_blank"
            className="link-contact"
          >
            <div className="contact">
              <Icon
                icon="ant-design:instagram-filled"
                width="32"
                className="icon-footer"
              />
              <h2>@panificadoracanada</h2>
            </div>
          </a>

          <a
            href="tel:+556232142586"
            type="tel"
            target="_blank"
            className="link-contact"
          >
            <div className="contact">
              <Icon
                icon="dashicons:whatsapp"
                width="32"
                className="icon-footer"
              />
              <h2>(62) 3214-2586</h2>
            </div>
          </a>
        </div>
      </section>
      <div className="content-dev">
        <h1>
          Desenvolvido por{' '}
          <a href="https://github.com/edgaregidio" target="_blank">
            Edgar Egidio
          </a>
        </h1>
      </div>
    </>
  )
}

export default Footer
