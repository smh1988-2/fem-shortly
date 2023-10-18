import React from 'react'
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

function NavBar() {
  return (
    <div><Image src={logo} alt="Shortly" /></div>
  )
}

export default NavBar