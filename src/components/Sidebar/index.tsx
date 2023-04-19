import logo from '~/assets/logo.svg'
import { NavLink,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function Sidebar() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const toHome = ()=>{
    navigate('/')
  }
  return (
    <aside className="flex flex-col pr-5">
      <img onClick={toHome} src={logo} className="w-[79px] mb-[55px] mt-[66px] ml-5" />
      <div className="flex flex-col gap-3">
        <MyLink to={`/chat`}>{t('Chat')}</MyLink>
        <MyLink to={`/image`}>{t('Image')}</MyLink>
        <MyLink to={`/setting`}>{t('Settings')}</MyLink>
      </div>
    </aside>
  )
}

export default Sidebar

type LinkProp = {
  to: string;
  children: React.ReactNode
}
const MyLink = ({ to, children }: LinkProp) => {
  return (
      <NavLink
        to={to}
        className={({ isActive }) => isActive
          ? "rounded-[10px] w-full h-[45px] pl-5 flex flex-col justify-center bg-primary-blue"
          : "rounded-[10px] w-full h-[45px] pl-5 flex flex-col justify-center bg-primary-background bg-opacity-20"
        }
      >
        <span className="text-white font-medium text-sm">{children}</span>
      </NavLink>
  )
}