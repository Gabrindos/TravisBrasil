import * as S from './styles'
import Utopia from "../../assets/Utopia.png"
import Astroworld from "../../assets/Astroworld.png"
export function List() {
  return (
    <>
      <S.Section>
        <img src={Utopia} alt="Utopia" />
        <p>
          UTOPIA (2023)
        </p>
      </S.Section>
      <S.Section>
        <img src={Astroworld} alt="Astroworld" />
        <p>
          ASTROWORLD (2018)
        </p>
      </S.Section>
    </>
  )
}
