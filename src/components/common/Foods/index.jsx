// import '../../../global.css'
import '../styles.css'

// imagens do cardápio
import ImgDefault from '../../../../public/img/items/imgdefault.png'
import SalgadosGrandes from '../../../../public/img/items/salgadosgrandes.jpg'
import Empadao from '../../../../public/img/items/empada.jpg'
import PaoComManteiga from '../../../../public/img/items/paocommanteiga.jpg'
import PaoComRequeijao from '../../../../public/img/items/paocomrequeijao.jpg'
import PaoFrancesComOvo from '../../../../public/img/items/paofrancescomovo.jpg'
import OvosMexidos from '../../../../public/img/items/ovosmexidos.jpg'
import MistoSimples from '../../../../public/img/items/mistosimples.jpg'
import MistoCompleto from '../../../../public/img/items/mistocompleto.jpg'
import SanduicheNatural from '../../../../public/img/items/sanduichenatural.jpg'
import BurgerEspecial from '../../../../public/img/items/burgerespecial.jpg'
import Tapioca from '../../../../public/img/items/tapioca.jpg'
import Omelete from '../../../../public/img/items/omelete.jpg'
import SalgadosEspeciais from '../../../../public/img/items/salgadosEspeciais.jpeg'

const data = [
  {
    id: 'salgado',
    name: 'Salgado Tradicional',
    description: '',
    price1: 'R$ 13,00',
    price2: '',
    image: SalgadosGrandes
  },
  {
    id: 'especial',
    name: 'Salgado Especial',
    description: 'Coxinha de Camarão, Quiche, Torta de Frango, Panqueca e Empadão.',
    price1: 'R$ 15,00',
    price2: '',
    image: SalgadosEspeciais
  },
  {
    id: 'paes',
    name: 'Pão com Manteiga na chapa',
    description: '',
    price1: 'R$ 7,50',
    price2: '',
    image: PaoComManteiga
  },
  {
    id: 'paes',
    name: 'Pão Francês com Requeijão na chapa',
    description: '',
    price1: 'R$ 10,00',
    price2: '',
    image: PaoComRequeijao
  },
  {
    id: 'paes',
    name: 'Pão Francês com Ovo',
    description: '',
    price1: 'R$ 8,50',
    price2: '',
    image: PaoFrancesComOvo
  },
  {
    id: 'ovosmexidos',
    name: 'Ovos mexidos ou fritos',
    description: '',
    price1: 'R$ 7,00 (1 und)',
    price2: 'R$ 12,00 (2 und)',
    image: OvosMexidos
  },
  {
    id: 'mistos',
    name: 'Misto Simples',
    description: 'Pão Francês, Presunto e Muçarela',
    price1: 'R$ 12,00',
    price2: '',
    image: MistoSimples
  },
  {
    id: 'mistos',
    name: 'Misto Completo',
    description: 'Pão Francês, Presunto e Muçarela, ovo, Tomate e Alface',
    price1: 'R$ 14,00',
    price2: '',
    image: MistoCompleto
  },
  {
    id: 'sanduiches',
    name: 'Sanduiche Natural',
    description: 'Pão Francês, Presunto e Muçarela, Tomate, Maionese e Alface',
    price1: 'R$ 12,00',
    price2: '',
    image: SanduicheNatural
  },
  {
    id: 'sanduiches',
    name: 'Burger Especial',
    description:
      'Pão Francês, Presunto e Muçarela, Ovo, Bacon, Salsicha, Tomate e Alface',
    price1: 'R$ 20,00',
    price2: '',
    image: BurgerEspecial
  },
  {
    id: 'tapioca',
    name: 'Tapioca Leve',
    description: 'Muçarela, Peito de Peru, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Tapioca
  },
  {
    id: 'tapioca',
    name: 'Tapioca de Queijo',
    description: 'Muçarela, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Tapioca
  },
  {
    id: 'tapioca',
    name: 'Tapioca Presunto e Queijo',
    description: 'Muçarela, Presunto, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Tapioca
  },
  {
    id: 'tapioca',
    name: 'Tapioca de Frango',
    description: 'Muçarela, Frango, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Tapioca
  },
  {
    id: 'omeletes',
    name: 'Omelete Leve',
    description: 'Muçarela, Peito de Peru, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Omelete
  },
  {
    id: 'omeletes',
    name: 'Omelete de Queijo',
    description: 'Muçarela, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Omelete
  },
  {
    id: 'omeletes',
    name: 'Omelete Presunto e Queijo',
    description: 'Muçarela, Presunto, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Omelete
  },
  {
    id: 'omeletes',
    name: 'Omelete de Frango',
    description: 'Muçarela, Frango, Requeijão, Tomate e Orégano',
    price1: 'R$ 19,00',
    price2: '',
    image: Omelete
  },
  {
    id: 'adicionais',
    name: 'Adicionais',
    description:
      'Muçarela, Frango, Requeijão, Hamburguer, Bacon, Salsicha e Ovo',
    price1: 'R$ 4,50',
    price2: '',
    image: ''
  }
]

function Foods() {
  return (
    <section className="content-items">
      <div className="header-items">
        <h1>Comidas</h1>
      </div>

      {data.map((item, index) => (
        <div key={index} className="contents" id={item.id}>
          <div className="info-items">
            <div className="descriptions">
              <h2>{item.name}</h2>
              <h4>{item.description}</h4>
            </div>

            <div className="prices">
              <p>{item.price1}</p>
              <p>{item.price2}</p>
            </div>
          </div>
          <div className="img-items">
            <img
              src={item.image === '' ? ImgDefault : item.image}
              alt={item.name}
            ></img>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Foods
