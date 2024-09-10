import hairImg from "../../public/hair.svg"
import beardImg from "../../public/beard.svg"
import finishImg from "../../public/finish.svg"
import eyebrowImg from "../../public/eyebrow.svg"
import massageImg from "../../public/massage.svg"
import hydrationImg from "../../public/hydration.svg"

interface QuickSearchOption {
  imgUrl: string
  title: string
}

export const quickSearchOptions: QuickSearchOption[] = [
  { imgUrl: hairImg, title: "Hair",},
  { imgUrl: beardImg, title: "Beard" },
  { imgUrl: finishImg, title: "Finish" },
  { imgUrl: eyebrowImg, title: "Eyebrow" },
  { imgUrl: massageImg, title: "Massage" },
  { imgUrl: hydrationImg, title: "Hydration" },
]