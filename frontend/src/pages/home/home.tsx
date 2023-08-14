import styles from './home.module.scss'
import { Tabla } from '../../components/organims/table'

const rows = ['']

export const Home = () => {
  return(
    <div>
      <Tabla
        rows={rows}
      />
    </div>
  )
}