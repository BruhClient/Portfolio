import { DiReact, DiPython } from 'react-icons/di'
import { RiNextjsLine } from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiDrizzle, SiShadcnui, SiFlask, SiTailwindcss, SiSanity } from 'react-icons/si'
import { IoPrismOutline } from 'react-icons/io5'
import { TbBrandAuth0, TbBrandThreejs } from 'react-icons/tb'
import { BsStripe } from 'react-icons/bs'
import { PiOpenAiLogo } from 'react-icons/pi'
const iconSize = 16

const techItems = [
  [<DiReact size={iconSize} />, 'React'],
  [<RiNextjsLine size={iconSize} />, 'NextJS'],
  [<BiLogoTypescript size={iconSize} />, 'TypeScript'],
  [<SiDrizzle size={iconSize} />, 'Drizzle ORM'],
  [<IoPrismOutline size={iconSize} />, 'Prisma ORM'],
  [<SiShadcnui size={iconSize} />, 'Shadcn'],
  [<TbBrandAuth0 size={iconSize} />, 'Auth JS'],
  [<DiPython size={iconSize} />, 'Python'],
  [<SiFlask size={iconSize} />, 'Flask'],
  [<TbBrandThreejs size={iconSize} />, 'Three JS'],
  [<SiTailwindcss size={iconSize} />, 'Tailwind'],
  [<BsStripe size={iconSize} />,"Stripe"],
  [<SiSanity size={iconSize} />,"Sanity"],
  [<PiOpenAiLogo size={iconSize} />,"OpenAi"]
]

const techNames = techItems.map((tech) => tech[1]) 

export type Tech = (typeof techNames)[number]

export default techItems

