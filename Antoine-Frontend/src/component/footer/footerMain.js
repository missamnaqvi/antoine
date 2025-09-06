import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterTop from './footerTop'
import FooterMiddle from './footerMiddle';
import { getAboutus, getFooter, getMenu, getService } from '../../store/action/country';

export default function FooterMain() {
  const { menu, footer, aboutus, service } = useSelector((state) => state.countries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFooter())
    dispatch(getMenu())
    dispatch(getAboutus())
    dispatch(getService())
  }, [dispatch])
  return (
    <footer >
      <FooterTop footer={footer} />
      <FooterMiddle menu={menu} aboutus={aboutus} service={service} />
    </footer>
  )
}
