import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
export default () => (    
<div>Click <Link href={{ pathname: 'uploadFile', query: { 'hash': 'file3.txt' }}}><a>here</a></Link> to read more</div>
)