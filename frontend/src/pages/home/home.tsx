import styles from './home.module.scss'
import { Tabla } from '../../components/organims/table'

const rows = [{
  make: 'hola',
  model: 'model',
  package: 'pack',
  color: 'color',
  year: 'year',
  category: 'category',
  mileage: 'mi',
  price: 'cents',
  id: 1
}]

export const Home = () => {
  return(
    <div>
      <Tabla
        rows={rows}
      />
    </div>
  )
}