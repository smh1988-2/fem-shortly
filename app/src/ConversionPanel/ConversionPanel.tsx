import React from 'react'
import { Button } from '../Buttons/Button'

import styles from "./styles.module.css"

function ConversionPanel({...props}) {
  return (
    <section className={styles.conversionPanel}>
        <h1>{props.content}</h1>
        <Button content={"Get Started"} size="lg" type="rounded" />
    </section>
  )
}

export default ConversionPanel