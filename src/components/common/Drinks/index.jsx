// import '../../../global.css'
// import './App.css'

// imagens do cardápio
import ImgDefault from '../../../../public/img/items/imgdefault.png'
import Cafe from '../../../../public/img/items/cafe.jpg'
import CafeExpresso from '../../../../public/img/items/cafeexpresso.jpg'
import Pingado from '../../../../public/img/items/pingado.jpg'
import Cappuccinoitaliano from '../../../../public/img/items/cappuccinoitaliano.jpg'
import CappuccinoCremoso from '../../../../public/img/items/cappuccinocremoso.jpg'
import ChocolateQuente from '../../../../public/img/items/chocolatequente.jpg'
import LeiteComCafeToddyPequeno from '../../../../public/img/items/leitecomcafetoddypequeno.jpg'
import leitecafegrande from '../../../../public/img/items/leitecafegrande.jpg'
import LeitePuro from '../../../../public/img/items/leitepuro.jpg'
import SucoDeLaranja from '../../../../public/img/items/sucodelaranja.jpg'
import SucoDaPolpa from '../../../../public/img/items/sucodapolpa.jpg'
import SucoDoisSabores from '../../../../public/img/items/sucodoissabores.jpg'
import SucoDetox from '../../../../public/img/items/sucodetox.jpg'
import SodaItaliana from '../../../../public/img/items/sodaitaliana.jpg'
import Creme from '../../../../public/img/items/creme.jpg'
import AguaDeCoco from '../../../../public/img/items/aguadecoco.jpeg'
import AguaSemGas from '../../../../public/img/items/aguasemgas.jpg'
import AguaComGas from '../../../../public/img/items/aguacomgas.jpg'
import CocaNS200ml from '../../../../public/img/items/cocans200ml.jpg'
import CocaKS290ml from '../../../../public/img/items/cocaks290ml.jpg'
import CocaLS1l from '../../../../public/img/items/cocals1l.jpg'
import Cocacaculinha from '../../../../public/img/items/cocacaculinha.jpeg'
import CocaLataZero from '../../../../public/img/items/cocalatazero.jpg'
import CocaLata from '../../../../public/img/items/cocalata.jpg'
import Coca600 from '../../../../public/img/items/coca600.jpg'
import Coca600zero from '../../../../public/img/items/coca600zero.jpg'
import GuaranaCaculinha from '../../../../public/img/items/guaranacaculinha.jpg'
import GuaranaLata from '../../../../public/img/items/guaranalata.jpg'
import Guarana600 from '../../../../public/img/items/guarana600.jpg'
import RedBull250 from '../../../../public/img/items/redbull250.jpg'

const data = [
  {
    id: 'cafe',
    name: 'Café 100ml',
    description: '',
    price1: 'R$ 3,00',
    price2: '',
    image: Cafe
  },
  {
    id: 'cafe',
    name: 'Café Expresso 50ml',
    description: '',
    price1: 'R$ 6,50',
    price2: '',
    image: CafeExpresso
  },
  {
    id: 'cafe',
    name: 'Pingado 100ml',
    description: '',
    price1: 'R$ 3,50',
    price2: '',
    image: Pingado
  },
  {
    id: 'cafe',
    name: 'Cappuccino Italiano 200ml',
    description: '',
    price1: 'R$ 14,00',
    price2: '',
    image: Cappuccinoitaliano
  },
  {
    id: 'cafe',
    name: 'Cappuccino Cremoso 200ml',
    description: '',
    price1: 'R$ 14,00',
    price2: '',
    image: CappuccinoCremoso
  },
  {
    id: 'leites',
    name: 'Chocolate quente 200ml',
    description: '',
    price1: 'R$ 14,00',
    price2: '',
    image: ChocolateQuente
  },
  {
    id: 'leites',
    name: 'Leite com CAFÉ/TODDY pequeno 200 ml',
    description: '',
    price1: 'R$ 4,00',
    price2: '',
    image: LeiteComCafeToddyPequeno
  },
  {
    id: 'leites',
    name: 'Leite com CAFÉ/TODDY grande 300 ml',
    description: '',
    price1: 'R$ 5,00',
    price2: '',
    image: leitecafegrande
  },
  {
    id: 'leites',
    name: 'Leite Puro gelado 300ml',
    description: '',
    price1: 'R$ 4,00',
    price2: '',
    image: LeitePuro
  },
  {
    id: 'leites',
    name: 'Leite Puro quente 300ml',
    description: '',
    price1: 'R$ 4,50',
    price2: '',
    image: LeitePuro
  },
  {
    id: 'sucos',
    name: 'Suco de laranja 400ml',
    description: '',
    price1: 'R$ 10,00',
    price2: '',
    image: SucoDeLaranja
  },
  {
    id: 'sucos',
    name: 'Suco de Polpa',
    description: '(Maracujá/ Caju/ Morango/ Tamarindo/Acerola e Abacaxi) 400ml',
    price1: 'R$ 12,00',
    price2: '',
    image: SucoDaPolpa
  },
  {
    id: 'sucos',
    name: 'Suco dois Sabores',
    description:
      '(Abacaxi e Hortelã, Laranja e Acerola, Laranja e Morango, Laranja e Mamão) 400ml',
    price1: 'R$ 14,00',
    price2: '',
    image: SucoDoisSabores
  },
  {
    id: 'sucos',
    name: 'Suco Detox',
    description: '(Água de coco, abacaxi, limão e couve) 400ml',
    price1: 'R$ 14,00',
    price2: '',
    image: SucoDetox
  },
  {
    id: 'sucos',
    name: 'Soda Italiana',
    description: '(Morango, Maçã Verde) 400ml',
    price1: 'R$ 14,00',
    price2: '',
    image: SodaItaliana
  },
  {
    id: 'cremes',
    name: 'Cremes',
    description: '(Morango, maracujá, cupuaçu) 400ml',
    price1: 'R$ 14,00',
    price2: '',
    image: Creme
  },
  {
    id: 'agua',
    name: 'Água de Coco',
    description: '',
    price1: 'R$ 8,00 (500ml)',
    price2: 'R$ 14,50 (1 Litro)',
    image: AguaDeCoco
  },
  {
    id: 'agua',
    name: 'Água sem gás 500ml',
    description: '',
    price1: 'R$ 3,00',
    price2: '',
    image: AguaSemGas
  },
  {
    id: 'agua',
    name: 'Água com gás 500ml',
    description: '',
    price1: 'R$ 3,50',
    price2: '',
    image: AguaComGas
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola NS 200ml',
    description: '',
    price1: 'R$ 3,00',
    price2: '',
    image: CocaNS200ml
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola KS 290ml',
    description: '',
    price1: 'R$ 4,00',
    price2: '',
    image: CocaKS290ml
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola LS 1l',
    description: '',
    price1: 'R$ 6,00',
    price2: '',
    image: CocaLS1l
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola caçulinha 200ml',
    description: '',
    price1: 'R$ 3,00',
    price2: '',
    image: Cocacaculinha
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola Lata Zero 350ml',
    description: '',
    price1: 'R$ 4,50',
    price2: '',
    image: CocaLataZero
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola Lata 350ml',
    description: '',
    price1: 'R$ 4,50',
    price2: '',
    image: CocaLata
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola 600ml',
    description: '',
    price1: 'R$ 5,50',
    price2: '',
    image: Coca600
  },
  {
    id: 'refrigerantes',
    name: 'Coca-Cola Zero 600ml',
    description: '',
    price1: 'R$ 5,50',
    price2: '',
    image: Coca600zero
  },
  {
    id: 'refrigerantes',
    name: 'Guaraná Caçulinha 200ml',
    description: '',
    price1: 'R$ 3,00',
    price2: '',
    image: GuaranaCaculinha
  },
  {
    id: 'refrigerantes',
    name: 'Guaraná Lata 350ml',
    description: '',
    price1: 'R$ 4,50',
    price2: '',
    image: GuaranaLata
  },
  {
    id: 'refrigerantes',
    name: 'Guaraná 600ml',
    description: '',
    price1: 'R$ 5,50',
    price2: '',
    image: Guarana600
  },
  {
    id: 'energetico',
    name: 'Energetico Red Bull 250ml',
    description: '',
    price1: 'R$ 10,50',
    price2: '',
    image: RedBull250
  }
]

function Drinks() {
  return (
    <section className="content-items">
      <div className="header-items">
        <h1>Bebidas</h1>
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

export default Drinks
